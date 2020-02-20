import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Top() {
  return (
    <View style={styles.top}>
      <View style={styles.topLogo}>
        <View style={styles.logo} />
      </View>
      <View style={styles.topText}>
        <Text style={styles.text} >SEOUL</Text>
      </View>
      <View style={styles.topempty}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 44,
    height: 44,
    backgroundColor: "gray",
    marginLeft: 22
  },
  text: {
    fontSize:20
  },
  top: {
    flexDirection: "row",
    flex: 1,
    backgroundColor:"#f4f4f4"
  },
  topLogo: {
    flex: 1,
    justifyContent: "center"
  },
  topempty: {
    flex: 1,
  },
  topText: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});
