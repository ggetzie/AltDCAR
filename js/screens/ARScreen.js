import React from 'react';

import { ViroARSceneNavigator } from 'react-viro';

import ItemViewSceneAR from '../ItemViewSceneAR';

export default function ARScreen() {
    return (
      <ViroARSceneNavigator
        initialScene={{scene: ItemViewSceneAR}}>
      </ViroARSceneNavigator>
    )
}
