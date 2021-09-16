import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  ViroARScene,
  ViroConstants,
} from 'react-viro';
import EntryMarker from './components/EntryMarker';

class ItemViewSceneAR extends Component {

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
        <EntryMarker 
          entry={this.props.arSceneNavigator.viroAppProps.entry}
        />
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

module.exports = ItemViewSceneAR;