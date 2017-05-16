import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './src/HomeScreen';
import LoginScreen from './src/LoginScreen';
import DashboardScreen from './src/DashboardScreen';

import ProfileScreenNavigator from './src/ProfileScreenNavigator';


const App = StackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: LoginScreen },
  Dashboard: { screen: DashboardScreen },
  
  Profile: {screen: ProfileScreenNavigator}
});


AppRegistry.registerComponent('FinBrain', () => App);
