import { gql } from '@apollo/client';

import {
  SENSOR_DEVICE_ID,
  SENSOR_DEVICE_NAME,
  SENSOR_DEVICE_SERIAL,
  SENSOR_DEVICE_MAC,
  SENSOR_DEVICE_REGION,
  SENSOR_DEVICE_TEMPERATURE,
  SENSOR_DEVICE_LATITUDE,
  SENSOR_DEVICE_LONGITUDE,
} from 'constants/fields';

import {
  GET_SENSORS_WITH_IOT
} from './constants';

export const getSensorsWithIoTQuery = () => gql`
  query {
    ${GET_SENSORS_WITH_IOT} {
      ${SENSOR_DEVICE_ID}
      ${SENSOR_DEVICE_NAME}
      ${SENSOR_DEVICE_SERIAL}
      ${SENSOR_DEVICE_MAC}
      ${SENSOR_DEVICE_REGION}
      ${SENSOR_DEVICE_TEMPERATURE}
      ${SENSOR_DEVICE_LATITUDE}
      ${SENSOR_DEVICE_LONGITUDE}
    } 
  }
`;