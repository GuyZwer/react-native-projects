/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {HelloWorldApp, Bananas, Test, LotsOfGreetings} from './Components/LearningComponent'

export default class LearningApp extends Component {
  render() {
    return (
      <View>
        <HelloWorldApp />
        <Bananas />
        <Test />
        <LotsOfGreetings />
      </View>
    )
  }
}

AppRegistry.registerComponent('LearningApp', () => LearningApp);
