import React from 'react';
import { View, FlatList, Text } from 'react-native';

import {
  useSensorsWithIotQuery,
} from 'apollo/useHooks';
import { useApolloErrorHandler } from 'hooks/useErrorHandler';
import Loading from 'components/Loading';

import styles from './styles';

export default function Sensors() {
  const {
    data, error, loading,
  } = useSensorsWithIotQuery();

  useApolloErrorHandler(error);

  React.useEffect(() => {
    console.log(`Data: ${data}`);
    console.log(error);
  }, [loading]);

  return (
    // eslint-disable-next-line no-nested-ternary
    loading
      ? <Loading />
      : data && !error
        ? (
          <View style={styles.container}>
            <FlatList
              data={[]}
              keyExtractor={null}
              renderItem={null}
            />
          </View>
        )
        : null
  );
}