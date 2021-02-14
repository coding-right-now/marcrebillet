import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"
import {getDanceMoves} from '../../controller/danceController'
import Footer from "../footer/Footer"
import {blackish, orangeish} from '../../colors/Color'
import ListItem from '../ListItem'


export default function DanceList({ navigation }){
    
    const [danceList, setDanceList] = useState()


    useEffect(()=> {
        getData()
    })

    function getData(){
        getDanceMoves(danceRetrived)
    }

    function danceRetrived(danceList){
        setDanceList(danceList)
    }


    return (
        <View style={styles.content}>
                     <FlatList style={styles.flatList}
                        data = {danceList}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => 
                        <ListItem item={item}
                        onPress={()=> navigation.navigate("DancePressed", {danceMove : item})}
    /> }
                        />
            <View style={styles.footer}>
                <Footer signOut={() => navigation.goBack()}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textHeadline : {
        fontSize : 30,
        alignSelf : 'center',
        fontWeight : "700", 
        margin : 10
    },
    imageView : {
        alignItems: 'center',
        padding : 20

    },
    image : {
        height: 200,
        width : 300,
        borderWidth : 2,
        borderRadius : 25
    },
    flatList  : {
        backgroundColor : blackish,
        height : "80%",
        paddingTop : 10,
        paddingBottom : 10,
        paddingLeft :  20,
        paddingRight : 20,
        marginBottom : 40,
        borderWidth : 2,
        borderRadius : 20,
        margin : 5
    },
    footer : {
        position: 'relative',
        bottom:0
    },
    content : {
        paddingTop : 30,
        backgroundColor : orangeish
    },
})