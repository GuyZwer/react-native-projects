/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, ScrollView } from 'react-native'

import {
  HelloWorldApp,
  Bananas,
  Test,
  LotsOfGreetings,
  BlinkApp,
  LotsOfStyles,
  Blink
} from './Components/LearningComponent'

export default class LearningApp extends Component {
  render() {
    return (
      <ScrollView>
        <View>
          <HelloWorldApp />
          <Bananas />
          <Test />
          <LotsOfGreetings />
          <BlinkApp />
          <LotsOfStyles />
          <FixedDimensionsBasics />
          <FlexDimensionsBasics />
          <JustifyContentBasics />
        </View>
      </ScrollView>
    )
  }
}

AppRegistry.registerComponent('LearningApp', () => LearningApp)
