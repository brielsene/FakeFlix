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
            <Text>Login:</Text>
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
    }






})
   