// Import a library to help create a component
import React from 'react'
import { Text, AppRegistry } from 'react-native'

// creat a component
const App = () => <Text>Some Text</Text>

// Render it to the device
AppRegistry.registerComponent('albums', () => App)
