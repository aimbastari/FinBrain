import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from './components/Button';
import firebase from 'firebase';

class LoginScreen extends Component {
    state = {email: '', password: '', error:'', user: '', loggedIn: ''};

    static navigationOptions = {
        title: 'Login'
    }; 


    handelOnPress = async () =>{
        const email = this.state.email;
        const password = this.state.password;

        //call firebase api to get authorized
        try{
            const user = await firebase.auth().signInWithEmailAndPassword(email, password);
            this.setState({loggedIn: true, error: ''})
            this.props.navigation.navigate('Dashboard');

        }catch(error){
            console.log(error);
            //Try to create a new user
            try {
                const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
                //User created successfully
                
                //Navigate to new screen
                this.setState({loggedIn: true})
                this.props.navigate('Dashboard');

            } catch (error) {
                console.log(error);

                //Couldn't login or create a new user
                this.setState({error: "Sign In Failed!"}) 
                this.setState({loggedIn: false})
                    
            }

        }

    }

    handleChangeTextEmail = (email) => {
        this.setState({email});
    }

    handleChangeTextPassword = (password) => {
        this.setState({password});
    }


    render() {
        const { navigate } = this.props.navigation;        
        return (
            <View style={styles.container}>
                <View style={{flex:2}}>
                    <Input label="email" 
                        value={this.state.email}                
                        onChangeText={this.handleChangeTextEmail}
                    />

                    <Input label="password" 
                        value={this.state.password}                
                        onChangeText={this.handleChangeTextPassword}
                        secureTextEntry
                    />
                    <Text style={styles.error}>
                        {this.state.error}
                    </Text>

                    <Button  onPress={this.handelOnPress} >
                        LOGIN
                    </Button>

                </View>
                <View style={{flex:1}}>

                </View>

            </View>

        );
    }
}

export default LoginScreen;

const styles = {
    container: {
        flex:1,
        backgroundColor: '#1c590a',
    },
    error: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'

  }, 


}