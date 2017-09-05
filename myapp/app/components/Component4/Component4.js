import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, ListView} from 'react-native';

const users = [
  {name:'Guy Zwerdling'},
  {name:'Adi Oren'},
  {name:'Nizan Zwerdling'},
  {name:'Ayelet Zafran'}

]

export default class Component4 extends Component{
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      userDataSource: ds.cloneWithRows(users),
    };
  }

  renderRow(user, sectionId, rowId, HighlightRow){
    return(
    <View style={styles.row}>
      <Text style={styles.rowText}>{user.name}</Text>
    </View>
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
    marginBottom:3,

  },
  rowText:{
    flex:1
  }
});
AppRegistry.registerComponent('Component4', () => Component4);
