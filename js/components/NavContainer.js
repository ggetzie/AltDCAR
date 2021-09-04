import React from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import {
    HomeScreen
} from '../screens/HomeScreen';

import {
    HOME_SCREEN,
    AR_SCREEN,
    DETAIL_SCREEN
} from '../screens/types';

export default function NavContainer(props) {
    const stack = useSelector((state) => state.nav.stack);
    let activeScreen;

    switch(stack[0]) {
        case HOME_SCREEN:
            activeScreen = <HomeScreen />;
        case AR_SCREEN: 
            activeScreen = <ARNavigator />;
        case DETAIL_SCREEN:
            activeScreen = <DetailScreen />;
    }

    return (
        <View style={localStyles.inner}>
            {activeScreen}
            
        </View>
    )
}