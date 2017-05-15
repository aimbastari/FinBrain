import React from 'react';
import { Text, Slider, View, StyleSheet, TouchableOpacity } from 'react-native';
import firebase from 'firebase';

import * as storage from '../utils/StorageMethods';
import Input from '../components/Input';


class ResultScreen extends React.Component {

  state = {email: '', password: '', error: '', loggedIn: false};    

  async componentWillMount() {
    //Get data from storage

    //Update state
  }




  handleSubmit = async () => {
    //fetch email and password. 
    const email = this.state.email;
    const password = this.state.password;

    //call firebase api to get authorized
    
    //if not a user -create an account
    //firebase.auth();
    
    //if fails send error message

    try{
      const user = await firebase.auth().signInWithEmailAndPassword(email, password);
      this.setState({loggedIn: true})
      
    }catch(error){
      //Try to create a new user
      try {
        const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
        //User created successfully
        
        //Navigate to new screen
        this.setState({loggedIn: true})


        //Call Cloud with function to obtain allocation


      } catch (error) {
        this.setState({error: "Sign In Failed!"}) 
        this.setState({loggedIn: false})
               
      }


    }


  }



  render() {

    const renderLogIn = () => {
      return(

        <View style={{flex: 1}}>
            <Input 
              placeholder="youremail@gmail.com" 
              label="email" 
              value={this.state.email} 
              onChangeText={(email)=>(this.setState({email}))}
            />

            <Input
              secureTextEntry
              label="password" 
              value={this.state.password} 
              onChangeText={(password) => (this.setState({password}))}
            />
            <Text style={styles.error}>
              {this.state.error}
            </Text>
            <TouchableOpacity onPress={this.handleSubmit}>
            <Text style={styles.submit}>
              GET ALLOCATION 
            </Text>
          </TouchableOpacity>     
        </View>

      )
    }

    const renderAllocation = () => {
      return(
        <View>
          <Text>
            Fin Brains says:  Your optimal allocation is:
            100 Bond ETF
          </Text>
        </View>

      )
    }

    return (
    
      <View style={styles.container}>
        {this.state.loggedIn ?  renderAllocation() : renderLogIn()}


{/* 
        <View style={styles.containerGrouping} >

          <Text style={styles.textQuestion}>
            Enter email and password and Submit your Profile
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
*/}

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
    
  },
  error: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'

  }, 
  submit: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'green',
    backgroundColor: 'grey'
  }





})


export default ResultScreen;

