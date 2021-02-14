import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"

import Footer from "../footer/Footer"
import {blackish, orangeish} from '../../colors/Color'
import {addDanceMove} from '../../controller/danceController'


export default function AddDancePage({ navigation }) {

    const [link, setLink] = useState("")
    const [name, setName] = useState("")


    function addDance(){
        var danceMove = {
            "name" : name,
            "link" : link
        }

        addDanceMove(danceMove, addComplete)
    }

    function addComplete(){
        navigation.navigate("WelcomePage")
    }



  return (
    <View style={styles.container}>
        <KeyboardAwareScrollView
            enableOnAndroid={true}
            scrollEnabled={true}
            enableAutomaticScroll={true}
            contentContainerStyle={{paddingTop : 10}}
            extraScrollHeight = {-20}
            >
        <View style={styles.imageView}>
            <Image source={{uri : "https://www.salaclamores.es/wp-content/uploads/2018/10/Rebillet_L.jpg"}} style={styles.image}/>
        </View>
        <View style={styles.seeDanceMoves}>
            <Text style={styles.textHeadline}>Add a dance move</Text>
        <View style={styles.inputView}>
            <View style={styles.textInputView}>
                <TextInput  style={styles.textInput} 
                            placeholder="Name of dance move" 
                            placeholderTextColor={orangeish}
                            value={name}
                            onChangeText={text => setName(text)}
                            />
            </View>
            <View style={styles.textInputView}>
                <TextInput  style={styles.textInput} 
                            placeholder="Link to image" 
                            placeholderTextColor={orangeish}
                            value={link}
                            onChangeText={text => setLink(text)}
                            />
                <TouchableOpacity onPress={() => addDance()}>
                    <View style={styles.loginView}>
                    <Text style={styles.textHeadlineTwo}>🍑</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    </KeyboardAwareScrollView>
        <View style={styles.footer}>
            <Footer text="Footer"/>
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
    width : "100%"
  },
  textInput: {
      width : 300,
      height: 50,
      borderWidth: 1.5,
      borderRadius : 20,
      borderColor : orangeish,
      margin : 20,
      textAlign : 'center',
      color : orangeish
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
textForInput : {
    color : orangeish
},
imageView : {
    backgroundColor : orangeish,
    padding : 10,
    paddingTop : 20,
    marginTop : -25
}  ,
textInputView : {
    alignItems : 'center'
},
loginView : {
    backgroundColor : orangeish,
    borderColor: blackish,
    borderWidth: 3,
    borderRadius : 30,
    width: "100%" ,
    padding : 5,
    alignContent : 'center'
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
    width: "100%" ,
    // marginTop : 100,
    padding : 5,
    paddingBottom : 20,
    alignItems : 'center'
  },
  footer : {
    marginBottom : -10,
    width : "100%"
  },
  seeDanceMoves : {
      alignItems : 'center',
      backgroundColor : blackish,
      padding: 20,
      width : "100%",
      marginTop : 30
  }
});
