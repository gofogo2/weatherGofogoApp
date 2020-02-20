import React from "react";
import { StyleSheet, Text, View,Image } from "react-native";

export default function Top() {
    return (
        <View style={styles.container} >
            <View style={styles.header01} >
                <Text style={styles.header01Text} >Fri. 14 Feb</Text>
            </View>
            <View style={styles.header02} ><Text style={styles.header02StatusText} >It's sunny</Text><Text style={styles.header02TempText} >28°  14°</Text></View>
            <View style={styles.body01} >
                <View style={styles.body01Item} ></View>
                <View style={styles.body01Item} ></View>
                <View style={styles.body01Item} ></View>
                <View style={styles.body01Item} ></View>
                <View style={styles.body01Item} ></View>
                <View style={styles.body01Item} ></View>
            </View>
            <View style={styles.body02} >
            <View style={styles.body02Item} ></View>
                <View style={styles.body02Item} ></View>
                <View style={styles.body02Item} ></View>
                <View style={styles.body02Item} ></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:7,
        backgroundColor:"#f4f4f4"
      },
      header01:{
        flex:0.4,
        justifyContent:"center"
      },
      header01Text:{
        fontSize:20,
        marginLeft:22,
        color:"#a1a1a1"
      },
      header02:{
        flex:0.5,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginLeft:22,
        marginRight:22,
    },
    header02StatusText:{
        fontSize:30,
        fontWeight:"900",
        marginBottom:15
      },
      header02TempText:{
        fontSize:15,
        color:"#a1a1a1",
        marginBottom:5
      },
    body01:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-around"
    },
    body01Item:{
        flex:0.1,
        backgroundColor:"#f39c12",
        
    },
    body02:{
        flex:1.5,
        justifyContent:"center",
        alignItems:"center"
    },
    body02Item:{
        width:313,
        height:28,
        backgroundColor:"#27ae60", 
        marginTop:3
    },
});