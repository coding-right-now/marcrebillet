import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"
import {signOut} from '../../controller/loginController'
import Footer from "../footer/Footer"
import {blackish, orangeish} from '../../colors/Color'

export default function WelcomePage({ navigation }) {

    function addDancePressed(){
        navigation.navigate("AddDancePage")
    }

    function signedOut(){
        navigation.navigate("StartPage")
    }

    function seeAllDances(){
        navigation.navigate("DanceList")
    }

  return (
    <View style={styles.container}>
        <View style={styles.imageView}>
            <Image source={{uri : "https://www.salaclamores.es/wp-content/uploads/2018/10/Rebillet_L.jpg"}} style={styles.image}/>
        </View>
        <View style={styles.seeDanceMoves}>
            <Text style={styles.textHeadline}>Lets dance for loop daddy</Text>
            <Text style={styles.textHeadline}>See added dance moves</Text>
            <TouchableOpacity onPress={() => seeAllDances()}>
                <View style={styles.addDanceView}>
                    <Text style={styles.textBline}>See all dance moves</Text>
                    <View style={styles.loginView}>
                        <Text style={styles.textHeadlineTwo}>🕺 💃</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
            <TouchableOpacity onPress={() => addDancePressed()}>
                <View style={styles.addDanceView}>
                    <Text style={styles.textBline}>Add dance move</Text>
                    <View style={styles.loginView}>
                        <Text style={styles.textHeadlineTwo}>🕺 💃</Text>
                    </View>
                </View>
            </TouchableOpacity>


        <View style={styles.footer}>
            <Footer text="Footer" signOut={() => signOut(signedOut())}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: orangeish,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  textInput: {
      width : 300,
      height: 50,
      borderWidth: 1.5,
      borderRadius : 20,
      borderColor : orangeish,
      margin : 20,
      textAlign : 'center'
  },
  image : {
      height: 150,
      width : 350,
      borderRadius : 20,
      borderWidth : 3,

  },
  textHeadline : {
    fontSize : 28,
    alignSelf : 'center',
    fontWeight : "700", 
    color : "white"
},
textBline : {
    fontSize : 28,
    alignSelf : 'center',
    fontWeight : "600", 
    color : orangeish
}, 
imageView : {
    backgroundColor : orangeish,
    padding : 20,
    marginTop : -25
    
}  ,
loginView : {
    backgroundColor : orangeish,
    borderColor: blackish,
    borderWidth: 3,
    borderRadius : 30,
    width: 200 ,
    padding : 5
}, 
textHeadlineTwo : {
    fontSize : 50,
    alignSelf : 'center',
    fontWeight : "700", 
    margin : 10
}, 
addDanceView : {
    backgroundColor : blackish,
    borderColor: orangeish,
    borderWidth: 3,
    borderRadius : 30,
    width: 300 ,
    padding : 5,
    paddingBottom : 20,
    alignItems : 'center'
  },
  footer : {
    marginBottom : -30,
    width : "100%"
  },
  seeDanceMoves : {
      alignItems : 'center',
      backgroundColor : blackish,
      padding: 20,
      width : 500
  }
});
