import React from 'react';
import ReactNative, {Text, View, ScrollView} from 'react-native';
import Header from './src/components/Header';

import Splash from './src/Splash';

/**
 * Main container
 */
const App = () => {
  return(
    <View style={{ flex: 1 }}> 
      <Splash />
      
    </View> 
  )

};

export default App;

