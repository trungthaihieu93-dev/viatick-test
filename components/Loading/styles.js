import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  indicator: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#FFF',
    // ios-only
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    // android-only
    elevation: 3
  },
});