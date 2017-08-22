import React, {Component} from 'react';
import {AppRegistry,Text, View} from 'react-native';
import Component1 from './app/components/Component1/Component1.js';

export default class myapp_android extends Component{
render(){
  return(
    <View>
      <Component1 message="Hello World!"/>
    </View>
  )
}

}

AppRegistry.registerComponent('myapp_android', () => myapp_android);
