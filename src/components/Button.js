import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

const Button = (props) => {
    const {buttonStyle, imageStyle} = styles;
    buttonStyle.backgroundColor = props.color;
    return(
        <TouchableOpacity onPressIn = {props.onPress} style={buttonStyle} onPressOut = {props.onPressOut}>
            <Image source={props.icon} style= {imageStyle}/>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        marginLeft: 0,
        marginRight: 0,
        bordorWidth: 3,
        bordorRadius: 5,
        backgroundColor: "#f194ff",
        width: 250,
        height: 250
    },
    imageStyle: {
        width: 250, 
        height: 250, 
        alignSelf: 'center', 
        justifyContent: 'center'
    }
};
export default Button;
