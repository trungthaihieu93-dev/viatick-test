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
// device mutatations
export const useUpdateDeviceMutation = () => {
  const [updateDevice, { loading, error, data }] = useMutation(getUpdateDeviceMutation(), {
    refetchQueries: [{
      query: getSensorsWithIoTQuery(),
    }]
  });

  return {
    updateDevice,
    loading,
    error,
    data,
  };
};

export const useDeleteDevicesMutation = () => {
  const [deleteDevice, { loading, error, data }] = useMutation(getDeleteDevicesMutation(), {
    refetchQueries: [{
      query: getSensorsWithIoTQuery(),
    }]
  });

  return {
    deleteDevice,
    loading,
    error,
    data,
  };
};