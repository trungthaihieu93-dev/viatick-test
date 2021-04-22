import { gql } from '@apollo/client';

export const getTestQuery = () => gql`
  query {
    getSensorsWithIoT {
      deviceId
      name
      serial
      mac
      region
    } 
  }
`;