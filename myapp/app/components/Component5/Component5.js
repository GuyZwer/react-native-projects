import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, ListView, TouchableHighlight} from 'react-native';


export default class Component5 extends Component{
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      userDataSource: ds,
    };
  }

  componentDidMount(){
    this.fetchUsers();
  }

  fetchUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((response) => {
        this.setState({
          userDataSource:this.state.userDataSource.cloneWithRows(response)
      });
    });
  }

  onPress(user){
    this.props.navigator.push({
      id: 'component6'
    });
  }

  renderRow(user, sectionId, rowId, HighlightRow){
    return(
    <TouchableHighlight onPress={() => {this.onPress(user)}}>
    <View style={styles.row}>
      <Text style={styles.rowText}>{user.name}:{user.email}</Text>
    </View>
    </TouchableHighlight>
  )
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
const styles = StyleSheet.create({
  row: {
    flexDirection:'row',
    justifyContent:'center',
    padding:20,
    backgroundColor:'#f4f4f9',
    marginBottom:1,

  },
  rowText:{
    flex:1
  }
});
AppRegistry.registerComponent('Component5', () => Component5);
