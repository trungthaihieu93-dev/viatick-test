import { useQuery, useMutation } from '@apollo/client';

import {
  getSensorsWithIoTQuery,
} from './queries';

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