import React from "react";
import { StyleSheet, Text, View,Image } from "react-native";

export default function Footer() {
    return (
        <View style={styles.footer} >
        <View style={styles.footerLeft} >
        <View style={styles.footerLeftInfo} />
          </View>
          <View style={styles.footerCenter} >
          <View style={styles.footerCenterIndicator} />
          </View>
          <View style={styles.footerRight} >
          <View style={styles.footerRightDetail} />
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    footer:{
        flex:1.5,
        flexDirection:"row",
        backgroundColor:"#f4f4f4",
      },
      footerLeft:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
      },
      footerLeftInfo:{
        backgroundColor:"gray",
        width:44,
        height:44
      },
      footerCenter:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
      },
      footerCenterIndicator:{
        width:60,
        height:10,
        backgroundColor:"gray"
      },
      footerRight:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
      },
      footerRightDetail:{
        width:44,
        height:44,
        backgroundColor:"gray"
      },
});