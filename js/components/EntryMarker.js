import React from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet } from 'react-native';
import { ViroText, ViroImage } from 'react-viro';
import { NAV_TO_SCREEN, SELECT_ENTRY } from '../actions/types';
import { DETAIL_SCREEN } from '../screens/types';

export default function EntryMarker({ entry }) {

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
                    useDispatch({type: SELECT_ENTRY, payload: entry.id});
                    useDispatch({type: NAV_TO_SCREEN, payload: DETAIL_SCREEN});
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