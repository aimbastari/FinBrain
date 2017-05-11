import React from 'react';
import { Text } from 'react-native';
import { TabNavigator } from "react-navigation";

class AgeScreen extends React.Component {
  render() {
    return <Text>What is your age</Text>
  }
}

class ChildrenScreen extends React.Component {
  render() {
    return <Text>How many children</Text>
  }
}

const MainScreenNavigator = TabNavigator({
  Age: { screen: AgeScreen },
  Children: { screen: ChildrenScreen },
});

export default MainScreenNavigator;