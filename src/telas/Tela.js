import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { View, Image } from 'react-native';
import ImgTopo from './assets/netflix.png';

export default function Tela(){
    return(<>
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Fake Flix</Text>
            <Image source={ImgTopo} style={estilos.imgtopo}/>
        </View> 
        <View style={estilos.container}>
            <Text style={estilos.login}>Login:</Text>
            <Text style={estilos.senha}>Senha:</Text>
        </View>
        </>
    )
        

}

const estilos = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#1C1B17",
        paddingTop:46,
        alignItems:"center",

    },

    titulo:{
        fontSize:36,
        color:"#FFFFFF",
        alignItems: "center",
        justifyContent:"center",
        paddingBottom:6,

    },

    imgtopo:{
        width:"100%",
    },

    login:{
        paddingRight:248,
        fontSize:20,
        color:"#FFFFFF",
        paddingBottom:16
    },

    senha:{
        paddingRight:248,
        fontSize:20,
        color:"#FFFFFF",
        
    }







})
   