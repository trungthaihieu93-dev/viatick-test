import { StatusBar } from 'expo-status-bar';
import React from 'react';

import useResources from 'hooks/useResources';
import Main from 'navigation';
import Loading from 'components/Loading';

export default function App() {
  const {
    isLoadingComplete,
  } = useResources();

  return isLoadingComplete
    ? <Main />
    : <Loading />;
}
