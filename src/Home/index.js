import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet,} from 'react-native';


import Logo from '../assets/logo.png';

export default function Home({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }}>
        <Image source={Logo} style={{width: 200, height: 130}}/>
        <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate("About")}
        ><Text style=
        {{fontSize:20, color: 'white'}}>Sobre a Coffstack</Text></TouchableOpacity>
      </View>
    );
  }

  const styles = StyleSheet.create({
  
    button: {
      width: 250,
      height: 50,
      borderRadius: 10,
      backgroundColor: "#5534b1",
      padding: 10,
      alignItems: 'center',
      justifyContent: `center`
    }

  });