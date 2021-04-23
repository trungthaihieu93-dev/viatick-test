import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    height: 100,
    flexDirection: 'row',
  },
  leftCol: {
    flex: 5,
    paddingLeft: 5
  },
  rightCol: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  temp: {
    fontSize: 13,
    color: 'red',
    marginLeft: 10,
  },
  online: {
    color: 'green'
  },
  offline: {
    color: 'red'
  },
  location: {
    flexDirection: 'row'
  }
});