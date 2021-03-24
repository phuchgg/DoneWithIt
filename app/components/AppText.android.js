import React from 'react';
import {Text, StyleSheet} from 'react-native';

function AppText({children}){
    return <Text style={styles.text}>{children}</Text>
}

const styles = StyleSheet.create({
    text:{
        color:"gold",
        fontSize: 20,
        fontFamily: "robotic",
    },
}); 

export default AppText;