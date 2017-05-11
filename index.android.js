import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import ChatScreen from './src/ChatScreen';
import SplashScreen from './src/SplashScreen';
import LoginScreen from './src/LoginScreen';


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button
          onPress={() => navigate('Chat')}
          title="Chat with Lucy"
        />
        <Button
          onPress={() => navigate('Splash')}
          title="Welcome to FinBrain"
        />
        
      </View>
    );
  }
}



const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
  Splash: { screen: SplashScreen },
  Login: { screen: LoginScreen }
});


AppRegistry.registerComponent('FinBrain', () => SimpleApp);
