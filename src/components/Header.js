import React from 'react';
import { Text, View } from 'react-native';

export default Header = ({text}) => {
    const {textStyle, viewStyle} = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{text}</Text>
        </View>
    )
};

const styles= {
    textStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#FFF"       
    },
    viewStyle: {
        backgroundColor: "#33D8D8",
        display: "flex", 
        alignItems: "center",
        justifyContent: "center",
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: {width: 0, height: 5},
        position: "relative"
    }

};