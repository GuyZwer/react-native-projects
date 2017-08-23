import React, {Component} from 'react';
import {AppRegistry,Text, View} from 'react-native';

export default class Component1 extends Component{
  constructor(){
    super();
    this.state = {
      name:'Brad',
      showName: 'guy'
    }
  }

render(){
  console.log('HELLO' + "that is console");
  let name = true ? this.state.showName + this.state.name + " add " + this.state: 'no name';
  return(
    <View>
      <Text>{this.props.message}</Text>
      <Text>{name}</Text>
    </View>
  )
}

}

AppRegistry.registerComponent('Component1', () => Component1);
