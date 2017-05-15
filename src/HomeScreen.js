
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import Button from './components/Button';
import * as storage from './utils/StorageMethods';

class HomeScreen extends Component {

   componentWillMount() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAVu5t24SMzLXkmC93YnEgwHgaYVsRuZcI",
        authDomain: "finbrain-4ac09.firebaseapp.com",
        databaseURL: "https://finbrain-4ac09.firebaseio.com",
        projectId: "finbrain-4ac09",
        storageBucket: "finbrain-4ac09.appspot.com",
        messagingSenderId: "929700741403"
    };
    firebase.initializeApp(config);
   } 

  static navigationOptions = {
    title: 'Welcome to FinBrain'
  };  
    render() {
        const { navigate } = this.props.navigation;
                
        return (
            <View style={[styles.containerStyle]}>
                <View style={[styles.logoStyle]}>
                    <Text style={styles.logoTextStyle}>
                        FinBrain
                    </Text>                

                    <Text style={[styles.captionTextStyle]}>
                        Let us do all the thinking
                    </Text> 

                </View>

                <View style={[styles.captionStyle]}>
                    <Button style={[styles.loginTextStyle]} onPress={() => navigate('Profile')} >
                        Click here to get started!
                    </Button>
                    <Button  onPress={() => storage.resetAsyncStorage()} >
                        reset data
                    </Button>

                </View>
                <View style={[styles.loginStyle, styles.border('#95afba')]}>
                    <Button style={[styles.loginTextStyle]} onPress={() => navigate('Login')} >
                        LOGIN
                    </Button>

                </View>
            </View>


        );
    }
}

const styles = {
    containerStyle : {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#21897e',
        justifyContent: 'center'
    },
    logoStyle : {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoTextStyle : {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#FFF'        
    },
    captionStyle: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 3,
    },
    captionTextStyle: {
        fontSize: 25,
        fontWeight: 'normal',
        color: '#FFF',
        opacity: 0.5        

    },
    loginStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2,
    },
    loginTextStyle: {
        fontSize: 30,
        fontWeight: 'normal',
        color: '#FFF',
    },


    border: (color) => ({borderWidth: 5, borderColor: color })

}



export default HomeScreen;