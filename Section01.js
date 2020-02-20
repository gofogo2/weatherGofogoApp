import React from "react";
import { StyleSheet, Text, View,Image } from "react-native";

export default function Top() {
    return (
        <View style={styles.section01} >
        <View style={styles.sunny} ></View>
        <View style={styles.tempTextContainer} >
        <Text style={styles.tempTextTemp} >28</Text>
        <Text style={styles.tempTextOc} >°C</Text>
        </View>
        
      </View>
    );
}

const styles = StyleSheet.create({
    section01:{
        flex:7,
        flexDirection:"row",
        backgroundColor:"#f4f4f4",
        justifyContent:"space-between"
      },
      sunny:{
        width:180,
        height:180,
        backgroundColor:"#ffdd59",
        alignSelf:"flex-start"
      },
      tempTextContainer:{
        width:168,
        height:118,
        alignSelf:"flex-end",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"flex-end",
      },
      tempTextTemp:{
        fontSize:80,
        fontWeight:"bold",
        marginBottom:-15
      },
      tempTextOc:{
        fontSize:30,
        fontWeight:"100"
      },
});