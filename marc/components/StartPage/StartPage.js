import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"
import Footer from "../footer/Footer"
import {blackish, orangeish} from '../../colors/Color'
import {login, subscribeToAuth} from '../../controller/loginController'

export default function StartPage({ navigation }) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const nosePressed = () => {
    login(email, password, loginComplete)
  }

  const loginComplete = () => {
    navigation.navigate("WelcomePage")
  }

  useEffect(() => {
    subscribeToAuth(authStateChanged)
  })


  const authStateChanged = (user) => {
    if(user !== null){
      navigation.navigate("WelcomePage")
    }

  }





  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
            enableOnAndroid={true}
            scrollEnabled={true}
            enableAutomaticScroll={true}
            contentContainerStyle={{paddingTop : 10}}
            >
      <Text style={styles.textHeadline}>GET READY TO PARTY</Text>
      <Text style={styles.textHeadlineTwo}>👏 🥳 🤟 </Text>

        <View style={styles.inputView}>
            <View style={styles.textInputView}>
                <Text style={styles.textForInput}>Email</Text>
                <TextInput  style={styles.textInput} 
                            placeholder="Enter Email" 
                            placeholderTextColor={blackish}
                            value={email}
                            onChangeText= {(text)=> setEmail(text)}
                            />
            </View>
            <View style={styles.textInputView}>
                <Text style={styles.textForInput}>Password</Text>
                <TextInput  style={styles.textInput} 
                            placeholder="Enter password" 
                            placeholderTextColor={blackish}
                            value={password}
                            onChangeText= {(text)=> setPassword(text)}
                            secureTextEntry={true}
                            />
                <TouchableOpacity onPress={nosePressed}>
                    <View style={styles.loginView}>
                    <Text style={styles.textHeadlineTwo}>👃</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                    <View style={styles.loginView}>
                    <Text style={styles.textHeadlineTwo}>🍑</Text>
                    </View>
                </TouchableOpacity>
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
    backgroundColor: '#fff',
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
  textForInput : {
      fontSize : 20,
      alignSelf : 'center',
      fontWeight : "600"
  },
  textHeadline : {
    fontSize : 30,
    alignSelf : 'center',
    fontWeight : "700", 
    margin : 10
},
loginView : {
    margin: 10,
    backgroundColor : blackish,
    width : 200,
    height : 95,
    borderWidth : 3,
    borderColor : orangeish,
    borderRadius : 25,
    alignSelf : 'center'
}  ,
textHeadlineTwo : {
    fontSize : 50,
    alignSelf : 'center',
    fontWeight : "700", 
    margin : 10
}, 
  header : {
    // flex : 0.2,
    width : "100%",

  },
  footer : {
    // flex : 0.2,
    width : "100%"
  }
});
