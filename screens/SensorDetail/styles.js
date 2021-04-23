import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    marginTop: 20,
  },
  fields:{
    height: 50,
    width: 300,
    marginTop: 10,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  updateButton: {
    backgroundColor: 'green'
  },
  deleteButton: {
    backgroundColor: 'red',
    marginLeft: 10,
  }
});