import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {blackish, orangeish} from '../../colors/Color'


const Header = props => {

    const content =(
        <View style={styles.container}>
            <View style={styles.textView}>
            <Text style={styles.text}>{props.text}</Text>

            </View>
        </View>

    )

    return content


}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        marginTop : -50,
        height : 100,
        paddingTop : 40,
        backgroundColor: blackish,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text : {
        color : orangeish, 
        fontSize : 40,
        fontWeight : "500"
    },
    textView : {
        width : 400,
        alignItems : "center"
    }
  });
  
  export default Header;