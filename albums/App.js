// Import a Library to help create a Component
import React, {Component} from 'react';
import { Text, AppRegistry,  ScrollView } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


export default class albums extends Component{
  render(){
    return(
      <ScrollView>
        <Header headerText={'Albums'}/>
        <AlbumList />
      </ScrollView>
    )
  }
};

//Render it to the device
AppRegistry.registerComponent('albums', () => App);
