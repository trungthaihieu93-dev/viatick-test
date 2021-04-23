import { gql } from '@apollo/client';

import {
  SENSOR_DEVICE_ID,
  SENSOR_DEVICE_NAME,
  SENSOR_DEVICE_SERIAL,
  SENSOR_DEVICE_MAC,
  SENSOR_DEVICE_REGION,
} from 'constants/fields';

import {
  GET_SENSORS_WITH_IOT
} from './contants';

export const getSensorsWithIoTQuery = () => gql`
  query {
    ${GET_SENSORS_WITH_IOT} {
      ${SENSOR_DEVICE_ID}
      ${SENSOR_DEVICE_NAME}
      ${SENSOR_DEVICE_SERIAL}
      ${SENSOR_DEVICE_MAC}
      ${SENSOR_DEVICE_REGION}
    } 
  }
`;