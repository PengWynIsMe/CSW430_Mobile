import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    padding: 60,
    paddingTop: 400
  },

  display: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 30,
    color: '#000',
  },

  calculator: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  numberPad: {
    flex: 3,
  },

  operatorPad: {
    flex: 1,
    justifyContent: 'space-between',
    marginLeft: 10,
  },

  row: {
    flexDirection: 'row',
    marginBottom: 15,
  },

  button: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    elevation: 2,
  },

  zeroButton: {
    width: 145,
  },

  buttonText: {
    fontSize: 22,
    color: '#000',
  },

  operatorButton: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },

  operatorText: {
    fontSize: 24,
    color: '#ff9800',
  },

  equalButton: {
    backgroundColor: '#ff9800',
  },

  equalText: {
    color: '#fff',
  },

  clearButton: {
    marginTop: 5,
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 65,
    borderRadius: 32.5,
    justifyContent: 'center',
    elevation: 2
  },

  clearText: {
    fontSize: 18,
    color: '#999',
  },
});
