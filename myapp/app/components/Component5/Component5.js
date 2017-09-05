import React, {Component} from 'react';
import {AppRegistry, Text, View, styleSheet, ListView} from 'react-native';


export default class Component5 extends Component{
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      userDataSource: ds,
    };
  }

  fatchusers(){
    fatch('https://jsonplaceholder.typicode.com/users')
  }

    render(){
      return(
        <View>
          <Text>Component5</Text>
        </View>
      );
    }

}

AppRegistry.registerComponent('Component5', () => Component5);
