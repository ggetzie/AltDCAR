import React from 'react';
import { StyleSheet } from 'react-native';
import { ViroText, ViroImage } from 'react-viro';

export default function EntryMarker({ entry, navigate, selectEntry}) {

    return (
        <>
            <ViroText 
                text={entry.title} 
                scale={[.5, .5, .5]}
                position={[0,0,-1]}
                style={styles.entryTitleTextStyle}
            />
            <ViroImage 
                scale={[0.25, 0.25, 0.25]} 
                position={[0, -.25, -1]} 
                source={require('../res/indicator.png')} 
                onClick={() => {
                    selectEntry(entry.id);
                    navigate();
                }}
            />
        </>
    )
}

var styles = StyleSheet.create({
  
  entryTitleTextStyle:{
    fontFamily: 'Arial',
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'center',
    textAlignVertical: 'center',
  }
});