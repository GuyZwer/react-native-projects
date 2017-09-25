import React from 'react';
import {
  AppRegistry,
  Text, View, Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
   return (
     <View>
       <Text>Hello, Chat App!</Text>
       <Button
         onPress={() => navigate('Chat')}
         title="Chat with Lucy"
       />
       <Button
         onPress={() => navigate('Chat2')}
         title="Chat with Guy"
       />
     </View>
    );
  }
}


class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  };
  render() {
    return (
      <View>
        <Text>Chat with Lucy</Text>
      </View>
    );
  }
}

class ChatScreen2 extends React.Component {
  static navigationOptions = {
    title: 'Chat with Guy',
  };
  render() {
    return (
      <View>
        <Text>Chat with Guy</Text>
      </View>
    );
  }
}


const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
  Chat2: { screen: ChatScreen2 },
});
export default SimpleApp;


// if you are using create-react-native-app you don't need this line
AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
