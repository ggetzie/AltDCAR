import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
  Button,
  ScrollView,
} from 'react-native';

import {
  ViroARSceneNavigator
} from 'react-viro';

import entries from './js/res/entries/data.json';
import EntryDetail from './js/EntryDetail';
import HomeScreen from './js/screens/HomeScreen';

const entryMap = new Map();
for (entry of entries) {
  entryMap.set(entry.id, entry)
}

// Sets the default scene for AR
var InitialARScene = require('./js/ItemViewSceneAR');

var UNSET = "UNSET";
var HOME_SCREEN = "HOME";
var AR_SCREEN = "AR";
var DETAIL_SCREEN = "DETAIL";
var MAP_SCREEN = "MAP";

var sharedProps = {
  apiKey:"API_KEY_HERE",
  entries: entryMap,
  selectedEntry: 1,
  navStack: [UNSET]
}

// This determines which type of experience to launch in, or UNSET, if the user should
// be presented with a choice of AR or VR. By default, we offer the user a choice.
var defaultNavigatorType = UNSET;

export default class AltDCARApp extends Component {
  constructor() {
    super();

    this.state = {
      navigatorType : defaultNavigatorType,
      sharedProps : sharedProps
    }
    this._getARNavigator = this._getARNavigator.bind(this);
    this._getHomeMenu = this._getHomeMenu.bind(this);
    this._getExperienceButtonOnPress = this._getExperienceButtonOnPress.bind(this);
    this._exitViro = this._exitViro.bind(this);
    this._selectEntry = this._selectEntry.bind(this);
  }

  render() {

    if (this.state.navigatorType == UNSET){
      return this._getHomeMenu();
    } else if (this.state.navigatorType == AR_NAVIGATOR_TYPE) {
      return this._getARNavigator();
    } else if  (this.state.navigatorType ==  DETAIL_NAVIGATOR_TYPE) {
      return this._getEntryDetail();
    }

  }

  _getHomeMenu() {
    return (
      <View style={localStyles.outer} >
        <View style={localStyles.inner} >
          <Text style={localStyles.titleText}>
            Welcome to Alternative DC AR
          </Text>
          <TouchableHighlight style={localStyles.buttons}
            underlayColor={'#68a0ff'} >
            <Text style={localStyles.buttonText}>View Map</Text>
          </TouchableHighlight>

          <TouchableHighlight style={localStyles.buttons}
            onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
            underlayColor={'#68a0ff'} >
            <Text style={localStyles.buttonText}>Enter AR</Text>
          </TouchableHighlight>
          <TouchableHighlight style={localStyles.buttons}
            onPress={this._getExperienceButtonOnPress(DETAIL_NAVIGATOR_TYPE)}
            underlayColor={'#68a0ff'}>
              <Text style={localStyles.buttonText}>View Entry</Text>
            </TouchableHighlight>
        </View>
      </View>
    )
  }
  
  // This function returns an anonymous/lambda function to be used
  // by the experience selector buttons
  _getExperienceButtonOnPress(navigatorType) {
    return () => {
      this.setState({
        navigatorType : navigatorType,
        navStack: this.state.sharedProps.navStack.concat(navigatorType)
      })
    }
  }

  _getEntryDetail() {
    const id = this.state.sharedProps.selectedEntry;

    return (
      <EntryDetail 
        entry={this.state.sharedProps.entries.get(id)} 
        handleBack={this._exitViro}
      />
    )
  }

  // Returns the ViroARSceneNavigator which will start the AR experience
  _getARNavigator() {
    return (
      <View style={localStyles.viroContainer}>
        <Button title="Back" onPress={this._exitViro} style={localStyles.exitButton}/>
        <ViroARSceneNavigator
          viroAppProps={
            {
                ...this.state.sharedProps,
                selectEntry: this._selectEntry,
                navigate: this._getExperienceButtonOnPress(DETAIL_NAVIGATOR_TYPE)
            }
          }
          initialScene={{scene: InitialARScene}}>
        </ViroARSceneNavigator>
      </View>
    );
  }

  // This function "exits" Viro by setting the navigatorType to UNSET.
  _exitViro() {
    this.setState({
      navigatorType : UNSET
    })
  }

  selectEntry(id) {
    this.setState({
      sharedProps: {
        ...this.state.sharedProps,
        selectedEntry: id
      }
    })
  }

  handleBack() {
    const currentStack = this.state.navStack;
    this.setState({
      navStack: currentStack.slice(0, currentStack.length-1)
    })
  }

  handleNav(screen) {
    this.setState({
      navStack: this.state.navStack.concat(screen)
    })
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
