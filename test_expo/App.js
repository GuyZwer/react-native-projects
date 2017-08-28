import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View  } from 'react-native';

export default class AlignItemsBasics extends Component {
  render() {
    return (
      // Try setting `alignItems` to 'flex-start'
      // Try setting `justifyContent` to `flex-end`.
      // Try setting `flexDirection` to `row`.
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>

        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
              <View style={styles.alternativeLayoutButtonContainer}>
                <Button
                  onPress={this._onPressButton}
                  title="This looks great!"
                />
                </View>
    );
  }
};

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => AlignItemsBasics);