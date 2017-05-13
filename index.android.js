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
import MainScreenNavigator from './src/PersonalScreen';


const App = StackNavigator({
  Splash: { screen: SplashScreen },
  Login: { screen: LoginScreen },
  Main: {screen: MainScreenNavigator}
});


AppRegistry.registerComponent('FinBrain', () => App);
