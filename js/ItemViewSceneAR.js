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
          entry={this.props.entry}
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

const mapStateToProps = (state) => {
  const entry = state.entries.index.get(state.entries.selected);
  return entry
}

export default connect(mapStateToProps)(ItemViewSceneAR)