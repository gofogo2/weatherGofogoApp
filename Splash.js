import React from "react";
import { StyleSheet, Text, View,Image } from "react-native";

export default function Splash() {
    return (
      <View style={styles.container} ><View style={styles.item}></View></View>
    );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"red"
  },
  item:{
    backgroundColor:"#ffc9c9",
    width:100,
    height:100,
  }
});