import React from "react";
import { StyleSheet, Text, View,Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Splash() {
    return (
      <LinearGradient
      colors={['#3023ae', '#c86dd7']}
      style={styles.linearGradient}>
        <View style={styles.container} >
        <Image style={styles.Image}
    source={require('./assets/big.png') }
  />
          <Text style={styles.Text} >매일 저녁6시, 크리에이터를
  위한 블라인드 데이트</Text>
        </View>
  
  </LinearGradient>
    );
}

const styles = StyleSheet.create({
    linearGradient:{
      flex:1,
      backgroundColor:"red",
      justifyContent:"center",
      alignItems:"center"
    },
    container:{
      justifyContent:"center",
      alignItems:"center"
    }
    ,
    Image:{
      width:110,
      height:32
    },
    Text:{
      marginTop:30,
      fontSize:23,
      fontWeight:"100",
      textAlign:"center",
      color:"white",
      letterSpacing:-2,
      paddingLeft:50,
      paddingRight:50
    }
  });