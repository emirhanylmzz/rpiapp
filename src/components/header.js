import React from 'react'
import {Text, View} from 'react-native'

const Header = (props) => {
    const {textStyle, viewStyle} = styles
    return (
        <View style={viewStyle}>
            <Text style={textStyle}> {props.headerText}</Text>
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 35,
    },
    viewStyle: {
        backgroundColor: 'green',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        shadowOffset: {widht: 0, height: 2},
        opacity: 1
    }
};

export default Header;