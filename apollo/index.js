import {
  ApolloClient, createHttpLink, InMemoryCache,
  fromPromise,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

import {
  GRAPHQL_ENDPOINT,
  X_API_KEY,
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

  const authLink = setContext(async (_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = await getStorageData('token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        'X-Api-Key': X_API_KEY,
        authorization: token ? `Bearer ${token}` : null,
      }
    };
  });

  const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      // eslint-disable-next-line consistent-return
      graphQLErrors.forEach((err) => {
        // token expire, refresh
        if (
          err.errorType === 'UnauthorizedException'
          || err.message === 'Token is expired') {
          return fromPromise(
            getAccessToken().catch((tokenErr) => {
              console.log(tokenErr);
              // eslint-disable-next-line no-useless-return
              return;
            })
              .then(async (accessToken) => {
                await setStorageData('token', accessToken);

                const oldHeaders = operation.getContext().headers;

                operation.setContext({
                  headers: {
                    ...oldHeaders,
                    authorization: `Bearer ${accessToken}`,
                  },
                });
                // Retry the request, returning the new observable
                return forward(operation);
              }),
          );
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

