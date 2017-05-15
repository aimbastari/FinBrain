import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from './components/Button';

class DashboardScreen extends Component {
  static navigationOptions = {
    title: 'Login'
  }; 

    render() {
        const { navigate } = this.props.navigation;        
        return (
            <View>
                <Text>
                    DashboardScreen
                </Text>        

            </View>

        );
    }
}

export default DashboardScreen;