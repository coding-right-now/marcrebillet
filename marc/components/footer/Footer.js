import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {blackish, orangeish} from '../../colors/Color'

const Footer = props => {

    const content =(
        <View style={styles.container}>
            <TouchableOpacity onPress={props.signOut}>
                <Text style={styles.text}>🤏</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.onPress}>
                <Text style={styles.text}>🤙</Text>
            </TouchableOpacity>
            
        </View>

    )

    return content


}

const styles = StyleSheet.create({
    container: {
        // marginBottom : -50,
        paddingBottom : 40,
        padding : 20,
        backgroundColor: blackish,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection : 'row'
    },
    text : {
        color : orangeish, 
        fontSize : 40
    },

  });

  export default Footer;