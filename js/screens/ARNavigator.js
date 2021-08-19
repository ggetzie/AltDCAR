import React from 'react';
import {
    View,
    Button,
    StyleSheet
} from 'react-native'

export default function ARNavigator() {
    return (
        <View style={localStyles.viroContainer}>
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
        <Button title="Back" onPress={this._exitViro} style={localStyles.exitButton}/>
      </View>
    )
}

var localStyles = StyleSheet.create({
  viroContainer :{
    flex : 1,
    backgroundColor: "black",
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