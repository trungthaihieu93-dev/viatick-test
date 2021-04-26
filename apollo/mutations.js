import { gql } from '@apollo/client';

import {
  SENSOR_DEVICE_ID,
  SENSOR_DEVICE_NAME,
  SENSOR_DEVICE_REGION,
} from 'constants/fields';

import {
  UPDATE_DEVICE,
  UPDATE_DEVICE_INPUT,
  DELETE_DEVICES,
} from './constants';

// Devices Mutation
export const getUpdateDeviceMutation = () => gql`
  mutation ($input: ${UPDATE_DEVICE_INPUT}) {
    ${UPDATE_DEVICE} (
      input: $input
    ) {
      ${SENSOR_DEVICE_ID}
      ${SENSOR_DEVICE_NAME}
      ${SENSOR_DEVICE_REGION}
    }
  }
`;

export const getDeleteDevicesMutation = () => gql`
  mutation ($devices: [Int]){
    ${DELETE_DEVICES} (
      deviceIds: $devices
    ) {
      rows_deleted
    }
  }
`;