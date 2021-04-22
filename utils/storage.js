import AsyncStorage from '@react-native-async-storage/async-storage';

export const setStorageData = async (key, val) => {
  try {
    await AsyncStorage.setItem(key, val);
  } catch (error) {
    // handle error
  }
};

export const getStorageData = async (key) => {
  try {
    const val = await AsyncStorage.getItem(key);
    return val;
  } catch (error) {
    // handle error
    return null;
  }
};