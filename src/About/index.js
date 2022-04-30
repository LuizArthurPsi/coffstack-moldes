import React from 'react';
import {View, Text, Image} from 'react-native';
import Logo from '../assets/principal.png';

export default function About() {
    return (
      <View style={{ flex: 1, alignItems: 'center', paddingTop: 200, paddingHorizontal: 30}}>
        <Text style={{fontSize: 19, textAlign:'center'}}>Seja bem vindo ao canal da Coffstack!{`\n`}{`\n`}</Text>
        <Text style={{fontSize: 18, textAlign:'justify'}}>Aqui você aprende a programar do jeito certo!{`\n`}Nossa stack de tecnologias abrange HTML, CSS, React, React Native, JavaScript, TypeScript, Firebase e mais algumas outras tecnologias. {`\n`}
        {`\n`}{`\n`}
</Text>
        <Image source={Logo} style={{width: 250, height: 102}}/>
      </View>
    );
  }