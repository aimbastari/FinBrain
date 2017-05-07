import React from 'react';
import { Text, TouchableOpacity  } from 'react-native';

const Button = (props) => {
    return (
        <TouchableOpacity style={styles.buttonStyle} onPress={props.onPress} >
            <Text style={styles.textStyle}>
                {props.children}
            </Text>
        </TouchableOpacity>
        
    )
}

const styles = {
    buttonStyle: {
        flex:1,
        alignSelf: "stretch",
        justifyContent: 'center',
        backgroundColor: '#95afba',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#222",
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 10
                
    },
    textStyle: {
        alignSelf: "center",
        color: "#FFF",
        fontSize: 20,
        paddingTop: 10,
        paddingBottom:10        
        
    }


}

export default Button;