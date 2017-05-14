import React from 'react';
import { Text, Slider, View, StyleSheet } from 'react-native';
import { saveAge, getAge } from '../utils/StorageMethods';
import * as storageMehtods from '../utils/StorageMethods';


class AgeScreen extends React.Component {
  static defaultProps = {
    age:25
  }

  state = {age: this.props.age};    

  async componentWillMount(){
    const age = await storageMehtods.getAge();
    this.setState({age: age});

  }

  componentWillUnmount() {
    console.log("logging age: " + this.state.age)
  }


  render() {
    return (
      <View style={styles.container}>

        <View style={styles.containerGrouping} >

          <Text style={styles.textQuestion}>
              WHAT IS YOUR AGE:
            </Text>
            <Text style={styles.textAge}>
              {this.state.age }
            </Text>

          <Slider
              style={styles.slider} 
              {...this.props}
              maximumValue = {100}
              minimumValue = {1}
              step = {5}
              value = {this.state.age > 0 ? this.state.age : 25}

              onValueChange={(age)=> this.setState({age})}
              onSlidingComplete={(age)=> storageMehtods.saveAge(age)}
              
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


export default AgeScreen;

