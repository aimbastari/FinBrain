import React from 'react';
import { Text, Slider, View, StyleSheet } from 'react-native';
import { TabNavigator } from "react-navigation";
import AgeScreen from './profile/AgeScreen';
import EmploymentScreen from './profile/EmploymentScreen';
import AssetScreen from './profile/AssetScreen';
import RiskScreen from './profile/RiskScreen';
import ResultScreen from './profile/ResultScreen';


const ProfileScreenNavigator = TabNavigator({
  Age: { screen: AgeScreen },
  Employment: { screen: EmploymentScreen },
  Assets: { screen: AssetScreen },
  Risk: { screen: RiskScreen },
  Result: { screen: ResultScreen },  
});


export default ProfileScreenNavigator;