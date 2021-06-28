import React from 'react';
import {View} from 'react-native';
import Button from './Button';

const ArrowButton = (props) => {
    const {buttonStyle, imageStyle} = styles;
    buttonStyle.backgroundColor = props.color;
    return(
        <View style={[styles.subcontainerStyle, { transform: [ {translateY: 30}]}]}>
            <Button onPress={ this.moveForward.bind(this) } color="#ffff4f" 
            icon={ require('../../images/up.png') }/>
        </View>
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
    },
    imageStyle: {
        width: 250, 
        height: 250, 
        alignSelf: 'center', 
        justifyContent: 'center'
    }
};
export default ArrowButton;
