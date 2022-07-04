import React from "react";
import { View,Text,Image,StyleSheet,TouchableOpacity } from "react-native";


export default function Header(){
    //tem logo e uma
    return(
        <View style={styles.Header}>
            <TouchableOpacity>
                <Image source={require('../img/logo.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../img/send.png')} style={styles.logo}></Image>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    Header:{
        height:55,
        backgroundColor:"#fff",
        flexDirection:'row',
        marginTop:40,
        alignItems:'center',
        justifyContent:'space-between',
        padding:20,
        borderBottomWidth:2,
        borderColor:'rgba(0,0,0,0.3)'
    },
    logo:{
        width:23,
        height:23
    }
})