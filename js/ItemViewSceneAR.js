'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroImage
} from 'react-viro';

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
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        <ViroText 
          text={this.state.text} 
          scale={[.5, .5, .5]} 
          position={[0, 0, -1]} 
          style={styles.itemTitleTextStyle} 
        />
        <ViroImage 
          scale={[1, 1, 1]} 
          position={[0, -1, -5]} 
          source={require('./res/indicator.png')} 
        />
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    this.setState({
      entries: this.props.arSceneNavigator.viroAppProps.entries
    })
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text : this.state.entries[0].title
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
      this.setState({
        test: "Tracking lost",
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
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
    textAlignVertical: 'center',
  }
});

module.exports = ItemViewSceneAR;
