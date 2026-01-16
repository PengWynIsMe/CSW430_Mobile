import { StyleSheet } from 'react-native';

const AppTheme = {
  colors:'#EF506B'
  }

const style = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    padding: 48 
  },
  titile:{
    fontSize: 48,
    fontWeight: "bold",
    color: AppTheme.colors,
    marginBottom: 24,
    marginTop: 72
  },
  input:{
    borderColor: AppTheme.colors,
    borderWidth: 1,
    width: '100%',
    marginTop: 12,
    borderRadius: 10,
    paddingLeft: 16
  },
  button:{
    backgroundColor: AppTheme.colors,
    borderRadius: 10,
    width: "100%",
    justifyContent:"center",
    alignItems: "center",
    padding: 12,
    marginTop:16
  },
  buttonText:{
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF"
  }
})

export default style;