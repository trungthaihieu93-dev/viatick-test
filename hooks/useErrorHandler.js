import { useEffect } from 'react';
import Toast from 'react-native-toast-message';

export const useApolloErrorHandler = (err) => {
  useEffect(() => {
    if (err) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: `${err}`,
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40,
      });
    }
  }, [err]);
};