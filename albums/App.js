// Import a Library to help create a Component
import React from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/header';



//Create a Component
const App = () => ({
  <Header />
});



//Render it to the device
AppRegistry.registerComponent('albums', () => App);
