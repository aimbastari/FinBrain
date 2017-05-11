
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from './components/Button';


class SplashScreen extends Component {
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
                    <Text style={[styles.captionTextStyle]}>

                    </Text> 

                    <Text style={[styles.captionTextStyle]}>
                        SWIPE TO CONTINUE
                    </Text> 


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



export default SplashScreen;