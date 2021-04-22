import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

import {
  GRAPHQL_ENDPOINT,
} from 'constants/env';
import {
  getStorageData,
  setStorageData,
} from 'utils/storage';
import getAccessToken from 'services/getAccessToken';

const useApolloClient = () => {
  const httpLink = createHttpLink({
    uri: GRAPHQL_ENDPOINT,
  });

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = getStorageData('token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : null,
      }
    };
  });

  const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      // eslint-disable-next-line consistent-return
      graphQLErrors.forEach(async (err) => {
        try {
          // token expire, refresh
          if (err.errorType === 'UnauthorizedException') {
            const oldHeaders = operation.getContext().headers;
            const accessToken = await getAccessToken();
            if (accessToken) {
              await setStorageData('token', accessToken);

              operation.setContext({
                headers: {
                  ...oldHeaders,
                  authorization: `Bearer ${accessToken}`,
                },
              });
              // Retry the request, returning the new observable
              return forward(operation);
            }
          }
        } catch (error) {
          console.log(error);
        }
      });
    }

    // To retry on network errors, we recommend the RetryLink
    // instead of the onError link. This just logs the error.
    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  });

  const client = new ApolloClient({
    link: authLink.concat(errorLink).concat(httpLink),
    cache: new InMemoryCache(),
  });

  return client;
};

export default useApolloClient;

