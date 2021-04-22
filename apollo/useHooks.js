import { useQuery, useMutation } from '@apollo/client';

import {
  getTestQuery,
} from './queries';

// queries
export const useTestQuery = () => {
  const { loading, error, data } = useQuery(getTestQuery());

  return {
    loading,
    error,
    data,
  };
};

// mutations