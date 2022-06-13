import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { View, Image, TextInput} from 'react-native';
import ImgTopo from './assets/netflix.png';



export default function Tela(){
    return(<>
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Fake Flix</Text>
            <Image source={ImgTopo} style={estilos.imgtopo}/>
        </View> 
        
            
        
        
            
        
        <View style={estilos.container}>
        
            
            <View style={estilos.viewInput}>
                <Text style={estilos.login}>Login:</Text>
                <TextInput style={estilos.textInput}></TextInput>
                
                
            </View>
            <View style={estilos.viewInput2}>
                <Text style={estilos.senha}>Senha:</Text>
                <TextInput style={estilos.textInput2}></TextInput>
            </View>
            
           
            <Text style={estilos.texto3}>Ainda não tem conta?</Text>
            <Text style={estilos.texto4}>Cadastre-se</Text>
            
            
            
            
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

    retangulo:{
        //width:106,
        //height:24,       
        //paddingBottom:200
    },
   
   

    

    texto3:{
        fontSize:18,
        color:"#FFFFFF",
        paddingTop:144,
        fontFamily: "InterRegular",  
    },
    texto4:{
        fontSize:18,
        color:"#E31E24",
        paddingTop:12,
        fontFamily: "InterBold",   
    },

    viewInput:{        
        paddingLeft:54,
        width:"100%",
        display:"flex",
        flexDirection:"row",
        paddingBottom:19,
    },
    login:{         
        fontSize:20,
        color:"#FFFFFF",
        paddingBottom:10,
        paddingRight:5,
    },

    textInput:{
        width:"75%",
        backgroundColor:"white",
        paddingLeft:5,
        
        
    },

    senha:{
       
        fontSize:20,
        color:"#FFFFFF",
        paddingBottom:10,   
    },
    textInput2:{
        
        width:"75%",
        backgroundColor:"white",
        paddingLeft:5,
    },
    viewInput2:{        
        paddingLeft:52,
        width:"100%",
        display:"flex",
        flexDirection:"row",
        
    },
    
   







})
   