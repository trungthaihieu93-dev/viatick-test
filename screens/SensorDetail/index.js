import React, { useState, useEffect, useCallback } from 'react';
import { View } from 'react-native';
import {
  Button,
  Title,
  TextInput,
} from 'react-native-paper';
import Toast from 'react-native-toast-message';

import {
  SENSOR_DEVICE_ID,
  SENSOR_DEVICE_NAME,
  SENSOR_DEVICE_REGION,
} from 'constants/fields';
import Icon from 'components/Icon';
import { useDeleteDevicesMutation, useUpdateDeviceMutation } from 'apollo/hooks';
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
    data: updatedData,
    error: updateError,
    loading: updateLoading,
    updateDevice,
  } = useUpdateDeviceMutation();

  const {
    data: deleteData,
    error: deleteError,
    loading: deleteLoading,
    deleteDevice,
  } = useDeleteDevicesMutation();

  useEffect(() => {
    if (updatedData) {
      Toast.show({
        type: 'success',
        position: 'bottom',
        text1: 'Updated device successfully!',
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40,
      });
    }

    if (deleteData) {
      Toast.show({
        type: 'success',
        position: 'bottom',
        text1: 'Delete device successfully!',
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40,
      });
    }

    navigation.goBack();
  }, [updatedData, deleteData]);

  useApolloErrorHandler(updateError);

  useApolloErrorHandler(deleteError);

  const handleDelete = useCallback((id) => {
    if (restrictedIDs.includes(id)) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'This device cannnot be deleted!',
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40,
      });
    } else {
      deleteDevice({
        variables: {
          devices: [id]
        },
      });
    }
  }, []);

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
          loading={updateLoading}
          onPress={() => updateDevice({
            variables: {
              input: {
                [SENSOR_DEVICE_ID]: sensor[SENSOR_DEVICE_ID],
                [SENSOR_DEVICE_NAME]: name,
                [SENSOR_DEVICE_REGION]: region
              }
            },
          }
          )}
        >
          Update
        </Button>
        <Button
          style={styles.deleteButton}
          labelStyle={{ color: 'white' }}
          loading={deleteLoading}
          onPress={() => handleDelete(sensor[SENSOR_DEVICE_ID])}
        >
          Delete
        </Button>
      </View>
    </View>
  );
}