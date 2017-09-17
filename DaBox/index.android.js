/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native'

export default class DaBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 'red'
    }
  }
  changeColor = () => {
    const color = this.state.color == 'red' ? 'yellowgreen' : 'red'
    this.setState({ color })
  }
  render() {
    return (
      <View style={styles.container}>
        <View
          style={[styles.colorView, { backgroundColor: this.state.color }]}
        />
        <View style={styles.buttonView}>
          <Button
            onPress={this.changeColor}
            title="GO ZWERD"
            color={'#841584'}
          />
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  colorView: {
    backgroundColor: 'yellowgreen',
    width: 100,
    height: 100
  },
  buttonView: {
    width: 100,
    height: 30
  }
})

AppRegistry.registerComponent('DaBox', () => DaBox)
