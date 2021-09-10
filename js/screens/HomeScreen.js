import React from 'react';
import { useDispatch } from 'react-redux';
import { 
  MAP_SCREEN, 
  DETAIL_SCREEN, 
  AR_SCREEN } from './types';
import {
  NAV_TO_SCREEN
} from '../actions/types'
import {
    View, 
    Text, 
    StyleSheet, 
    TouchableHighlight
} from 'react-native';

export default function HomeScreen() {
  const dispatch = useDispatch();
  return (
      <>
        <Text style={localStyles.titleText}>
          Welcome to Alternative DC AR
        </Text>
        <TouchableHighlight 
          style={localStyles.buttons}
          onPress={() => dispatch({
            type: NAV_TO_SCREEN, 
            payload: MAP_SCREEN})}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.buttonText}>View Map</Text>
        </TouchableHighlight>

        <TouchableHighlight style={localStyles.buttons}
          onPress={() => dispatch({
            type: NAV_TO_SCREEN,
            payload: AR_SCREEN
          })}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.buttonText}>Enter AR</Text>
        </TouchableHighlight>

        <TouchableHighlight style={localStyles.buttons}
          onPress={() => dispatch({
            type: NAV_TO_SCREEN,
            payload: DETAIL_SCREEN
          })}
          underlayColor={'#68a0ff'}>
            <Text style={localStyles.buttonText}>View Entry</Text>
        </TouchableHighlight>
      </>
  )
}

var localStyles = StyleSheet.create({
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