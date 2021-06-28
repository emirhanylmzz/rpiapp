import React, { Component } from 'react';
import {View} from 'react-native';
import Button from './src/components/Button';
import Header from './src/components/header';

import io from 'socket.io-client/dist/socket.io';


class App extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.socket = io('http://192.168.1.28:3000');
  }

  moveForward = (event) => {
    event.stopPropagation();
    this.socket.emit('direction', 'forward');
  }
  
  moveBackward = (event) => {
    event.stopPropagation();
    this.socket.emit('direction', 'backward');
  }

  moveLeft = (event) => {
    event.stopPropagation();      
    this.socket.emit('direction', 'left');  
  }

  moveRight = (event) => {
    event.stopPropagation();
    this.socket.emit('direction', 'right'); 
  }

  onRealese = (event) => {
    event.stopPropagation();
    this.socket.emit('direction', 'onRealese');
  }

  render() {
    return (
      <View style ={{flex: 1, backgroundColor: "#61ff"}}>
        <View>
          <Header headerText={'RPI CAR'}/>
        </View>
        <View style ={{flex: 1, backgroundColor: "#61ff", marginLeft: 20}}>
          <View style={[styles.subcontainerStyle, { transform: [{ rotate: "-90deg"}, {translateY: 0}, {scale: 0.4}]}]}>
            <Button onPress={ this.moveForward.bind(this) } 
              onPressOut = {this.onRealese.bind(this)}  
              color="#ffff4f" 
              icon={ require('./images/right.png') }/>
          </View>
          <View style={[styles.subcontainerStyle, { transform: [{ rotate: "-90deg"}, {translateY: 125}, {translateX: 80}, {scale: 0.4} ]}]}>
            <Button onPress={ this.moveRight.bind(this) } 
              onPressOut = {this.onRealese.bind(this)} 
              color="#f7596b" 
              icon={ require('./images/down.png') }/>
          </View>
          <View style={[styles.subcontainerStyle, { transform: [{ rotate: "90deg" }, {translateY: 125}, {translateX: -330}, {scale: 0.4}]}]}>
            <Button onPress={ this.moveLeft.bind(this) } 
              onPressOut = {this.onRealese.bind(this)}
              color="#98ef6b" 
              icon={ require('./images/down.png') } />
          </View>
          <View style={[styles.subcontainerStyle, { transform: [{ rotate: "90deg" }, {translateY: 0}, {translateX: -400}, {scale: 0.4}]}]}>
            <Button onPress={ this.moveBackward.bind(this) } 
              onPressOut = {this.onRealese.bind(this)} 
              color="#ff704f" 
              icon={ require('./images/right.png') } />
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  subcontainerStyle: {
      bordorBottomWidth: 1,
      backgroundColor: '#61afff',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      borderColor: '#ddd',
      position: 'relative',
      width: 350
  }
};

export default App;