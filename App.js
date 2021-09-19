import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './js/store';

import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import NavContainer from './js/components/NavContainer';
import BackButton from './js/components/BackButton';

export default class AltDCARApp extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={localStyles.inner}>
          <NavContainer />
          <BackButton />
        </SafeAreaView>
      </Provider>
    )    

  }
  
}

var localStyles = StyleSheet.create({
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
    justifyContent: 'center',
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
