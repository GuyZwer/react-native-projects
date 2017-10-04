import React, { Component } from 'react';
import {AppRegistry, Text, Image, View } from 'react-native';

export  class HelloWorldApp extends Component {
  render() {
    return (
      <Text>Hello world!</Text>
    );
  }
}

export class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{width: 193, height: 127}}/>
    );
  }
}

export class Test extends Component {
  render() {
    var num = '1';
    return (
      <View>
        <Bananas />
      </View>
    );
  }
}

export class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export class LotsOfGreetings extends Component {
  render() {
    return (
      //in this class we calling to Greeting class and setting a key and value for this key
      //becouse the Greeting class have a return with string "hello" and this.props he take what he got
      //from Greeting which is the proprerties (in our case this is the name value)
      //
      //more specific the "this.props.name" prefer to key named "name", after he found the key he take the value of this key and display it
      <View style={{alignItems: 'center'}}>
        <Greeting name='Guy' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    );
  }
}
