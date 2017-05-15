import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from './components/Button';

class LoginScreen extends Component {
    static navigationOptions = {
    title: 'Login'
    }; 


    render() {
        const { navigate } = this.props.navigation;        
        return (
            <View style={styles.container}>
                <Input label="email" 
                

                />

                <Input label="password" 
                
                />
                <View >
                    <Button  onPress={() => navigate('Dashboard')} >
                        LOGIN
                    </Button>

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
    }


}