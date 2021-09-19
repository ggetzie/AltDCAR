import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, StyleSheet } from "react-native";
import { NAV_BACK } from '../actions/types';

export default function BackButton(props) {
    const stackLength = useSelector((state) => state.nav.stack.length);
    const dispatch = useDispatch();

    return (stackLength > 1 &&
        <Button 
            title="Back" 
            style={localStyles.BackButton} 
            onPress={() => dispatch({type: NAV_BACK})}
        />
    )
}

var localStyles = StyleSheet.create({
    
    backButton : {
        height: "10%",
        width: "100%",
        paddingTop:10,
        paddingBottom:10,
        marginTop: 0,
        marginBottom: 20,
        backgroundColor:'#68a0cf',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
    }
})