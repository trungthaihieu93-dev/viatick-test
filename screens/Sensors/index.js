import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  useSensorsWithIotQuery,
} from 'apollo/hooks';
import {
  GET_SENSORS_WITH_IOT,
} from 'apollo/constants';
import {
  SENSOR_DEVICE_ID,
} from 'constants/fields';
import {
  SENSOR_DETAIL,
} from 'constants/screens';
import { useApolloErrorHandler } from 'hooks/useErrorHandler';
import Loading from 'components/Loading';

import styles from './styles';
import SensorItem from './SensorItem';

export default function Sensors() {
  const navigation = useNavigation();
  const {
    data, error, loading,
  } = useSensorsWithIotQuery();

  useApolloErrorHandler(error);

  return (
    // eslint-disable-next-line no-nested-ternary
    loading
      ? <Loading />
      : data && !error
        ? (
          <ScrollView style={styles.container}>
            {
              (data[GET_SENSORS_WITH_IOT] || [])
                .map((sensor) => (
                  <SensorItem
                    key={sensor[SENSOR_DEVICE_ID]}
                    {...sensor}
                    onPress={() => navigation.navigate(SENSOR_DETAIL, { sensor })}
                  />
                ))
            }
          </ScrollView>
        )
        : null
  );
}