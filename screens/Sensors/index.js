import React from 'react';
import { View, FlatList, Text } from 'react-native';

import {
  useTestQuery,
} from 'apollo/useHooks';
import Loading from 'components/Loading';

import styles from './styles';

export default function Sensors() {
  const {
    data, error, loading,
  } = useTestQuery();

  React.useEffect(() => {
    console.log(`Data: ${data}`);
    console.log(`Error: ${error}`);
  }, [loading]);

  return (
    loading
      ? <Loading />
      : (
        <View style={styles.container}>
          <FlatList
            data={[]}
            keyExtractor={null}
            renderItem={null}
          />
        </View>
      )
  );
}