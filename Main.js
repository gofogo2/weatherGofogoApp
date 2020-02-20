import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import Top from "./Top";
import Section01 from "./Section01";
import Section02 from "./Section02";
import Footer from "./Footer";

export default function Main() {
  return (
    <View style={styles.container}>
     <Top/>
     <Section01></Section01>
      <Section02></Section02>
     <Footer></Footer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: getStatusBarHeight(),
    flex: 1,
  }
 
});
