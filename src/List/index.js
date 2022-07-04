import React from "react";

import { View,Text,Image,StyleSheet,TouchableOpacity } from "react-native";

export default function Lista(props){
    const liked=require('../img/like.png')
    const unliked=require('../img/likeada.png')
    function verifyLike(likeada){
        return likeada ? liked:unliked

    }
    function showlikes(likers){
        if(likers===0){
           return;
        }
        return(
            <Text style={styles.likesNumber}>{likers}{likers > 1 ? ' Curtidas':' Curtida'}</Text>
        )
    }
   return( 
   <View style={styles.mainFeed}>
     <View style={styles.feedView}>
        <Image resizeMode="cover" source={{uri:props.data.imgperfil}} style={styles.fotoPerfil}></Image>
        <Text style={styles.nomePerfil}>{props.data.nome}</Text>

     </View>
     <Image source={{uri:props.data.imgPublicacao}} style={styles.feedImagems}></Image>

     <View style={styles.areaBtn}>

        <TouchableOpacity>
        <Image source={verifyLike(props.data.likeada)} style={styles.iconsFeed}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={require('../img/comment.png')} style={styles.iconsFeed}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={require('../img/send.png')}style={styles.iconsFeed}></Image>
        </TouchableOpacity>
        
        
     </View>
     {showlikes(props.data.likers)}
     <Text style={styles.nome}>{props.data.nome}</Text>
     <Text style={styles.descricao}>{props.data.descricao}</Text>
    </View>
   )
}

const styles=StyleSheet.create({
    mainFeed:{
      flex:1,
      height:'100%'
    },
   feedView:{
    flexDirection:'row',
    flex:1,
    alignItems:'center',
    padding:8

   },
   fotoPerfil:{
    width:50,
    height:50,
    borderRadius:25
   },
   nomePerfil:{
    fontSize:20,
    padding:5,
    fontFamily:'Roboto'
   },
   feedImagems:{
    height:300,
    alignItems:'center',
    resizeMode:'cover'
   },
   areaBtn:{
    flexDirection:'row',
    padding:10
   },
   iconsFeed:{
    width:25,
    height:25,
    margin:5
   },
   likesNumber:{
    padding:1,
    marginLeft:15,
    fontSize:17,
    fontWeight:'bold'
   },
   nome:{
    fontSize:17,
    marginLeft:15,
    padding:1,
    fontWeight:'bold'
   },
   descricao:{
    marginLeft:15,
    
   }
})