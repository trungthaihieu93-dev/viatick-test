import React, { useState } from 'react';
import { View } from 'react-native';
import {
  Button,
  Title,
  TextInput,
} from 'react-native-paper';

import {
  SENSOR_DEVICE_NAME,
  SENSOR_DEVICE_REGION,
} from 'constants/fields';
import Icon from 'components/Icon';

import styles from './styles';

export default function SensorDetail({ navigation, route }) {
  const { sensor } = route.params || {};

  const [name, setName] = useState(sensor[SENSOR_DEVICE_NAME]);
  const [region, setRegion] = useState(sensor[SENSOR_DEVICE_REGION]);

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
        onChangeText={name => setName(name)}
      />

      <TextInput
        style={styles.fields}
        mode="outlined"
        label="Region"
        value={region}
        onChangeText={region => setText(region)}
      />

      <View style={styles.buttons}>
        <Button
          style={styles.updateButton}
          labelStyle={{ color: 'white' }}
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