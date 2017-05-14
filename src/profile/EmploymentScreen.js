import React from 'react';
import { Text, Slider, View, StyleSheet, Picker } from 'react-native';
import * as storage from '../utils/StorageMethods';

class EmploymentScreen extends React.Component {
  static defaultProps = {type: "salaried", amount: 10
  }

  state = {type: this.props.type, amount: this.props.amount};    

  async componentWillMount() {
    //Get data from storage
    const employment = await storage.getEmployment();

    //Update state
    this.setState(employment);
  }

  render() {

    const handleTypeChange = (type) => {
      //set value in storage
      const employment = {type: type, amount: this.state.amount};
      storage.saveEmployment(employment)

      //set value in state -refresh component
      this.setState(employment);

    }


    return (
      <View style={styles.container}>

        <View style={styles.containerGrouping} >

          <Text style={styles.textQuestion}>
              ANUAL INCOME (in thousands):
            </Text>
            <Text style={styles.textAge}>
              {this.state.amount}
            </Text>

          <Slider
              style={styles.slider} 
              {...this.props}
              maximumValue = {500}
              minimumValue = {0}
              step = {10}
              value = {this.state.amount > 0 ? this.state.amount : 20}

              onValueChange={(amount)=> this.setState({type: this.state.type, amount: amount})}
              onSlidingComplete={(amount)=> storage.saveEmployment({type: this.state.type, amount:amount})}

              onValueChange={(amount)=> this.setState({type: this.state.type , amount : amount})}
          />

        </View>

        <View style={styles.containerGrouping} >

            <Text style={styles.textQuestion}>
              TYPE OF EMPLOYMENT:
            </Text>

            <Picker
              selectedValue={this.state.type}
              onValueChange={handleTypeChange}
              mode="dropdown"              
              >
              <Picker.Item label="salaried" value="salaried" />
              <Picker.Item label="commission" value="commission" />
              <Picker.Item label="self employed" value="selfEmployed" />

            </Picker>


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


export default EmploymentScreen;

