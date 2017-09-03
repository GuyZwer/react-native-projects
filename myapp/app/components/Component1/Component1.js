import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class Component1 extends Component{
    constractor(){
      super();
      this.state = {
        name:'Brad',
      }
    }
    render(){
      return(
        <View>
          <Text>{this.props.message}</Text>
          <Text>{this.state.name}</Text>
        </View>
      );
    }
}

AppRegistry.registerComponent('Component1', () => myapp);
