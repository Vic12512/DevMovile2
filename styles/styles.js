import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  
  //global
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title:{
    fontSize: 44,
    marginTop: 35,
    textAlign: 'center',
    fontWeight: 'bold'
  },

  text:{
    fontSize: 25,
  },

  button:{
    color: '#27ae60 ',
    backgroundColor: '#42a5f5',
    borderRadius: 5,
    padding: 7,
    width: Dimensions.get('window').width *0.30,
    margin: 10,
  },

  buttontext:{
    fontSize: 20,
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  resultado:{
    fontSize: 19,
  },  

  textInputContainer:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },

  textInputS:{
    textAlign: 'center',
    fontSize: 21,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 20,
    width: Dimensions.get('screen').width * 0.3,
    margin: 10,
  },

  textInputM:{
    textAlign: 'center',
    fontSize: 21,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 20,
    width: Dimensions.get('screen').width * 0.5,
    margin: 10,
  },

  //pagina principal
  presentationContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('screen').height *0.8,
  },

  //pagina Tabla de Multiplicar
  paginaTabDeMulContainer:{
    justifyContent: 'center',
    alignItems: 'center'
  },

  lista:{
    textAlign: 'center',
    
  },

  listaitem:{
    textAlign: 'center',
    borderTopWidth: 1,
  },

  webView:{
    width: Dimensions.get('screen').width *0.95,
  },

});