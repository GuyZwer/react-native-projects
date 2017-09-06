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
    .then((response) => response.jason())
    .then((response) => {
      this.setState({
        userDataSource:this.state.userDataSource.cloneWithRows(response)

      });
    });
  }

    render(){
      return(
        <ListView
          dataSource={this.state.userDataSource}
          renderRow={this.renderRow.bind(this)}
          />
      );
    }

}

AppRegistry.registerComponent('Component5', () => Component5);
