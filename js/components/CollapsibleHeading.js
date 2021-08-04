import React, {useState} from "react";
import {View, Text, TouchableHighlight, StyleSheet} from "react-native";
import {decode} from 'html-entities';

export default function CollapsibleHeading({ initialState, title, children }) {
    const [collapsed, setCollapsed] = useState(initialState)

    return (
        <>
            <TouchableHighlight 
                onPress={() => setCollapsed(!collapsed)}
                style={styles.sectionHead}
            >
                <Text style={styles.headingText}>
                    {collapsed ? decode("&#9654;") : decode("&#9660;")} {title}
                </Text>
            </TouchableHighlight>
            {!collapsed &&
            <View>
                {children}
            </View>
            }
        </>
    );
};

const styles = StyleSheet.create({
    headingText: {
        fontSize: 25,
        fontWeight: '500'
    },
    sectionHead: {
        marginBottom: 5,
        marginTop: 10,
        backgroundColor: 'lightgrey',
        padding: 5,
        borderRadius: 5,
        flex: 1,
        flexDirection: 'row'
    },
    triangle: {
        color: '#5F9EA0',
        fontSize: 25
    }
});