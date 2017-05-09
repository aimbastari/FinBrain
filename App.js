import React from 'react';
import ReactNative, {Text, View, ScrollView} from 'react-native';
import Header from './src/components/Header';
import { StackNavigator } from 'react-navigation';


import Splash from './src/Splash';


class SplashScreen extends Component{
  static navigationOptions = {
    title: 'Welcome'
  };

  render(){
    <View style={{ flex: 1 }}> 
      <Splash />      
    </View> 
  }


}


const StackApp = StackNavigator({
  Splash: {screen: SplashScreen}
});


export default StackApp;

