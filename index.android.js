import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import SplashScreen from './src/SplashScreen';
import LoginScreen from './src/LoginScreen';
import ProfileScreenNavigator from './src/ProfileScreenNavigator';


const App = StackNavigator({
  Splash: { screen: SplashScreen },
  Login: { screen: LoginScreen },
  Profile: {screen: ProfileScreenNavigator}
});


AppRegistry.registerComponent('FinBrain', () => App);
