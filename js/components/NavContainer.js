import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
    View, 
    StyleSheet, 
    Button, 
    ScrollView,
    Text
 } from 'react-native';

import {
    HomeScreen,
    DetailScreen,
    ARScreen,
    MapScreen
} from '../screens';

import {
    HOME_SCREEN,
    AR_SCREEN,
    DETAIL_SCREEN,
    MAP_SCREEN
} from '../screens/types';

export default function NavContainer(props) {
    const stack = useSelector((state) => state.nav.stack);
    
    switch(stack[0]) {
        case HOME_SCREEN:
            return <HomeScreen />;
        case AR_SCREEN: 
            return <ARScreen />;
        case DETAIL_SCREEN:
            return <DetailScreen />;
        case MAP_SCREEN:
            return <MapScreen />;
        default:
            return <HomeScreen />;
    }
}