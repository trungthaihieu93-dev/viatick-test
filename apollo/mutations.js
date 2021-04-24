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
  mutation ${UPDATE_DEVICE_INPUT} (
    $id: Int!
    $name: String!
    $region: String!
  ) {
    ${UPDATE_DEVICE} (
      ${SENSOR_DEVICE_ID}: $id,
      ${SENSOR_DEVICE_NAME}: $name,
      ${SENSOR_DEVICE_REGION}: $region
    ) {
      ${SENSOR_DEVICE_ID}
      ${SENSOR_DEVICE_NAME}
      ${SENSOR_DEVICE_REGION}
    }
  }
`;

export const getDeleteDevicesMutation = () => gql`
  mutation ${DELETE_DEVICES} (
    deviceIds: [$ids]
  )
`;