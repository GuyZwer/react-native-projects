import React, {Component} from 'react';
import {AppRegistry, Text, View, styleSheet} from 'react-native';



export default class Component6 extends Component{
  render(){
    return(
      <View>
        <Text>this is component6!</Text>
      </View>
    );
  }

}

AppRegistry.registerComponent('Component6', () => Component6);
