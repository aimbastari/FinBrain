import React from 'react';
import { Text, Slider, View, StyleSheet, Picker } from 'react-native';
import * as storage from '../utils/StorageMethods';

class RiskScreen extends React.Component {
  static defaultProps = {risk: "riskAverse"}

  state = {risk: this.props.risk};    

  async componentWillMount() {
    //Get data from storage
    const risk = await storage.getRisk();

    //Update state
    this.setState({risk});
  }

  render() {


    return (
      <View style={styles.container}>

        <View style={styles.containerGrouping} >

          <Text style={styles.textQuestion}>
              How Risk Averse are you?:
            </Text>
            <Text style={styles.textAge}>
              {this.state.risk}
            </Text>

          <Slider
              style={styles.slider} 
              {...this.props}
              maximumValue = {10}
              minimumValue = {0}
              step = {1}
              value = {this.state.risk > 0 ? this.state.risk : 5}
              
              onValueChange={(risk)=> this.setState({risk})}
              onSlidingComplete={(risk)=> storage.saveRisk(risk)}
          />

        </View>


      </View>
  
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "center",
    backgroundColor: '#EDEDED',
    borderWidth: 0
    
  },
  containerGrouping: {
    borderWidth: 4,
    borderRadius: 10,
    borderColor: '#21897e',
    backgroundColor: '#BFCF',
    margin: 20,
    paddingBottom: 20
  },
  
  textQuestion:{
    margin: 30,
    fontSize: 20,
    color: '#21897e',
    borderWidth: 0

  },
  textAge:{
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '900',
    margin: 10,    
    borderWidth: 0
    
  },
  slider:{
    height: 10,
    margin: 10,
    borderWidth: 0
    
  }

})


export default RiskScreen;

