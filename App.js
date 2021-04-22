import React from 'react';
import { ApolloProvider } from '@apollo/client';

import useResources from 'hooks/useResources';
import Main from 'navigation';
import Loading from 'components/Loading';
import useApolloClient from 'apollo';

export default function App() {
  const {
    isLoadingComplete,
  } = useResources();

  const client = useApolloClient();

  return isLoadingComplete
    ? (
      <ApolloProvider client={client}>
        <Main />
      </ApolloProvider>
    )
    : <Loading />;
}
