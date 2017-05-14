import React from 'react';
import { Text, Slider, View, StyleSheet, TouchableOpacity } from 'react-native';


import * as storage from '../utils/StorageMethods';



class ResultScreen extends React.Component {
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

    const  handleSubmit = async () => {
      //get the profile from async storage
      const profile = await storage.getAsyncStorage();

      //Log for debugging
      console.log(profile);      

      //send the profile to fin brain and wait for allocation


    }


    return (
      <View style={styles.container}>

        <View style={styles.containerGrouping} >

          <Text style={styles.textQuestion}>
            Submit your Profile to FIN BRAIN
          </Text>
            
          <TouchableOpacity onPress={handleSubmit}>
            <Text style={styles.textQuestion}>
              FIN BRAIN
            </Text>
          </TouchableOpacity>     
          
        </View>

        <View style={styles.containerGrouping} >

            <Text style={styles.textQuestion}>
              FIN BRAIN's optimal allocation is:
            </Text>


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


export default ResultScreen;

