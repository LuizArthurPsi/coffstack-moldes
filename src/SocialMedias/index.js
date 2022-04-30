import React from 'react';
import {View, Text, Image, Button, StyleSheet,} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

import Logo from '../assets/logo.png';

export default function Home({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={Logo} style={{width: 200, height: 130}}/>
        <View style={{ flexDirection:'row', alignItems:'center', paddingTop: 135}}>
        <FontAwesome 
  name='instagram'
  size={40}
  color={'#5534b1'}
  />
      <Text style={{paddingLeft: 12, fontSize: 22, color:'#5534b1'}}>Instagram: @coffstack</Text>
      </View>
      <View style={{ flexDirection:'row', alignItems:'center', paddingTop: 40}}>
        <FontAwesome 
  name='twitter'
  size={40}
  color={'#5534b1'}
  />
      <Text style={{paddingLeft: 12, fontSize: 22, color:'#5534b1'}}>Twitter: @coffstack</Text>
      </View>
      </View>
    );
  }
