import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import {
  Button,
  Title,
  TextInput,
} from 'react-native-paper';

import {
  SENSOR_DEVICE_ID,
  SENSOR_DEVICE_NAME,
  SENSOR_DEVICE_REGION,
} from 'constants/fields';
import Icon from 'components/Icon';
import { useUpdateDeviceMutation } from 'apollo/hooks';
import { useApolloErrorHandler } from 'hooks/useErrorHandler';

import styles from './styles';

const restrictedIDs = [
  101502, 101503
];

export default function SensorDetail({ navigation, route }) {
  const { sensor } = route.params || {};

  const [name, setName] = useState(sensor[SENSOR_DEVICE_NAME]);
  const [region, setRegion] = useState(sensor[SENSOR_DEVICE_REGION]);

  const {
    data,
    error,
    loading,
    updateDevice,
  } = useUpdateDeviceMutation();

  useEffect(() => {
    if (data) {
      navigation.goBack();
    }
  }, [data]);

  useApolloErrorHandler(error);

  return (
    <View style={styles.container}>
      <Icon name="coolant-temperature" color="black" size={100} />
      <Title style={styles.title}>
        {sensor[SENSOR_DEVICE_NAME]}
      </Title>

      <TextInput
        style={styles.fields}
        mode="outlined"
        label="Name"
        value={name}
        onChangeText={(nameText) => setName(nameText)}
      />

      <TextInput
        style={styles.fields}
        mode="outlined"
        label="Region"
        value={region}
        onChangeText={(regionText) => setRegion(regionText)}
      />

      <View style={styles.buttons}>
        <Button
          style={styles.updateButton}
          labelStyle={{ color: 'white' }}
          loading={loading}
          onPress={() => updateDevice({
            variables: {
              id: sensor[SENSOR_DEVICE_ID],
              name: sensor[SENSOR_DEVICE_NAME],
              region: sensor[SENSOR_DEVICE_REGION]
            },
          }
          )}
        >
          Update
        </Button>
        <Button
          style={styles.deleteButton}
          labelStyle={{ color: 'white' }}
        >
          Delete
        </Button>
      </View>
    </View>
  );
}