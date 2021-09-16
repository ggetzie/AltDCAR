import React from 'react';

import { View, StyleSheet } from 'react-native';

import { useSelector } from 'react-redux';

import { ViroARSceneNavigator } from 'react-viro';

var initialScene = require('../ItemViewSceneAR');

export default function ARScreen() {
  const entry = useSelector((state) => state.entries.index.get(state.entries.selected))
  return (
    <View style={localStyles.viroContainer}>
      <ViroARSceneNavigator
        initialScene={{scene: initialScene}}
        viroAppProps={{entry: entry}}
        >
      </ViroARSceneNavigator>
    </View>
  )
}

var localStyles = StyleSheet.create({
  viroContainer :{
    flex : 1,
    backgroundColor: "black",
    minHeight: 400
  },
});