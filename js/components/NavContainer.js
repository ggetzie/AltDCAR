import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, StyleSheet, Button } from 'react-native';

import { HomeScreen } from '../screens/HomeScreen';

import DetailScreen from '../screens/DetailScreen';
import MapScreen from '../screens/MapScreen';
import ARScreen from '../screens/ARScreen';

import {
    HOME_SCREEN,
    AR_SCREEN,
    DETAIL_SCREEN,
    MAP_SCREEN
} from '../screens/types';
import { NAV_BACK } from '../actions/types';

export default function NavContainer(props) {
    const stack = useSelector((state) => state.nav.stack);
    let activeScreen;

    switch(stack[0]) {
        case HOME_SCREEN:
            activeScreen = <HomeScreen />;
        case AR_SCREEN: 
            activeScreen = <ARScreen />;
        case DETAIL_SCREEN:
            activeScreen = <DetailScreen />;
        case MAP_SCREEN:
            activeScreen = <MapScreen />;
        default:
            activeScreen = <HomeScreen />;
    }

    return (
        <View style={localStyles.inner}>
            {activeScreen}
            {stack.length > 1 && 
                <Button 
                    title="Back" 
                    onPress={() => useDispatch({type: NAV_BACK})}
                    style={localStyles.backButton} />
            }
        </View>
    )
}

var localStyles = StyleSheet.create({
    inner: {
        flex : 1,
        flexDirection: 'column',
        alignItems:'center',
        backgroundColor: "black",
    },
    backButton : {
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
})