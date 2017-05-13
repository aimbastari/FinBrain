import React from 'react';
import { Text, Slider, View, StyleSheet } from 'react-native';
import { TabNavigator } from "react-navigation";
import AgeScreen from './Profile/AgeScreen';


class EmploymentScreen extends React.Component {
  render() {
    return <Text>How much income per year</Text>
  }
}

class AssetScreen extends React.Component {
  render() {
    return <Text>How many assets outside of your home</Text>
  }
}

class RiskScreen extends React.Component {
  render() {
    return <Text>How Risky are you</Text>
}
}

const  ReviewScreen = () => {
  return (
     <Text>Submit</Text>
  )  
}


const MainScreenNavigator = TabNavigator({
  Age: { screen: AgeScreen },
  Employment: { screen: EmploymentScreen },
  Assets: { screen: AssetScreen },
  Risk: { screen: RiskScreen },
  Review: { screen: ReviewScreen },
  
});

export default MainScreenNavigator;