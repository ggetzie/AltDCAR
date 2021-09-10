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
import { NAV_BACK } from '../actions/types';

export default function NavContainer(props) {
    const stack = useSelector((state) => state.nav.stack);
    const dispatch = useDispatch();
    
    function selectScreen(screenType) {
        switch(screenType) {
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
    
    return (
        <View style={localStyles.inner}>
            {selectScreen(stack[0])}
            {stack.length > 1 && 
                <Button 
                    title="Back" 
                    onPress={() => dispatch({type: NAV_BACK})}
                    style={localStyles.backButton} />
            }
            <Text>Length of stack: {stack.length}</Text>
            <ScrollView>
                {stack.map((typ, i) => <Text key={i}>{typ}</Text>)}
            </ScrollView>
        </View>
    )
}

var localStyles = StyleSheet.create({
    inner: {
        flex : 1,
        flexDirection: 'column',
        alignItems:'center',
        backgroundColor: "white",
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