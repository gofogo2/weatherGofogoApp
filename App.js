import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Splash from "./Splash";
import Main from "./Main";

export default class App extends React.Component {
  state = { 
    isUpdate: true
  };

  componentDidMount(){
    setTimeout(() => {
      this.setState({isUpdate:false});
    }, 100);
  }


  render() {
    const { isUpdate } = this.state;
    return (
      <View style={styles.container}>
        {isUpdate ?( <Splash/>) : (<Main/>)}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
});
