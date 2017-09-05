import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TouchableHighlight} from 'react-native';


export default class Component2 extends Component{
  onPress(){
    console.log('area pressed')
  }
  onPress2(){
    console.log('area view2 pressed')
  }
  render(){
    return(
      <View>
        <View style={styles.myView}>
          <Text style={styles.myText}>this is component2</Text>
          </View>
          <View style={styles.container}>
            <TouchableHighlight
                    style={styles.v1}
                    onPress={this.onPress}
                    underlayColor="blue">
              <View>
                <Text style={styles.myText}>View 1</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.v2}
              onPress={this.onPress2}
              underlayColor='#f04352'
              >
            <View>
              <Text style={styles.myText}>View 2</Text>
            </View>
            </TouchableHighlight>
            <View style={styles.v3}>
              <Text style={styles.myText}>View 3</Text>
            </View>
          </View>
      </View>

    );
  }ct
}
const styles = StyleSheet.create({
  myView: {
    backgroundColor:'blue'
  },
  myText: {
    color: 'white'
  },
  container: {
    flexDirection: 'row',
    height:300
  },
  v1: {
    flex:1,
    backgroundColor:'red',
    padding:10
  },
  v2: {
    flex:1,
    backgroundColor:'green',
    padding:10
  },
  v3: {
    flex:1,
    backgroundColor:'black',
    padding:10
  }

});


AppRegistry.registerComponent('Component2', () => Component2);
