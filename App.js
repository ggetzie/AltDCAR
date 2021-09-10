import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './js/store';

import {
  View,
  StyleSheet,
} from 'react-native';



import NavContainer from './js/components/NavContainer';

var sharedProps = {
  apiKey:"API_KEY_HERE",
  selectedEntry: 1,
}

export default class AltDCARApp extends Component {
  constructor() {
    super();

    this.state = {
      sharedProps : sharedProps
    }
  }

  render() {
    return (
      <Provider store={store}>
        <View style={localStyles.outer}>
          <NavContainer />
        </View>
      </Provider>
    )    

  }
  
}



var localStyles = StyleSheet.create({
  viroContainer :{
    flex : 1,
    backgroundColor: "black",
  },
  outer : {
    flex : 1,
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: "black",
  },
  inner: {
    flex : 1,
    flexDirection: 'column',
    alignItems:'center',
    backgroundColor: "black",
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 20,
    color:'#fff',
    textAlign:'center',
    fontSize : 25
  },
  buttonText: {
    color:'#fff',
    textAlign:'center',
    fontSize : 20
  },
  buttons : {
    height: 80,
    width: 150,
    paddingTop:20,
    paddingBottom:20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  exitButton : {
    height: 50,
    width: 100,
    paddingTop:10,
    paddingBottom:10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  }
});

module.exports = AltDCARApp
