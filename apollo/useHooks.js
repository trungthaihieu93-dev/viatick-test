import { useQuery, useMutation } from '@apollo/client';

import {
  getSensorsWithIoTQuery,
} from './queries';
import {
  getDeleteDevicesMutation,
  getUpdateDeviceMutation,
} from './mutations';

// queries
export const useSensorsWithIotQuery = () => {
  const { loading, error, data } = useQuery(getSensorsWithIoTQuery());

  return {
    loading,
    error,
    data,
  };
};

// mutations
export const useUpdateDeviceMutation = () => {
  const { loading, error, data } = useMutation(getUpdateDeviceMutation());

  return {
    loading,
    error,
    data,
  };
};