'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroImage
} from 'react-viro';
import EntryMarker from './components/EntryMarker';

export default class ItemViewSceneAR extends Component {

  constructor() {
    super();
    
    // Set initial state here
    this.state = {
      text : "Initializing AR...",
    };
    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    const vProps = this.props.arSceneNavigator.viroAppProps;
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        <EntryMarker 
          entry={vProps.entries.get(0)}
          navigate={vProps.navigate}
          selectEntry={vProps.selectEntry}
        />
        {/* <ViroText 
          text={this.state.text} 
          scale={[.5, .5, .5]} 
          position={[0, 0, -1]} 
          style={styles.itemTitleTextStyle} 
        />
        <ViroImage 
          scale={[0.25, 0.25, 0.25]} 
          position={[0, -1, 0]} 
          source={require('./res/indicator.png')} 
          onClick={this.props.arSceneNavigator.viroAppProps.handleEntry}
        /> */}
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text : "ok"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
      this.setState({
        text: "Tracking lost",
      });
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },

  itemTitleTextStyle:{
    fontFamily: 'Arial',
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'center',
    textAlignVertical: 'center',
  }
});

module.exports = ItemViewSceneAR;
