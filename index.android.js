/**
 * FinBrain entry point
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './App';

export const FinBrain = () =>{
    return <App />
}




AppRegistry.registerComponent('FinBrain', () => FinBrain);
