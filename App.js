import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import{createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/Home';
import About from './src/About';
import SocialMedias from './src/SocialMedias';
import {FontAwesome} from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return(
    <Tab.Navigator screenOptions={{tabBarActiveTintColor: '#5534b1', tabBarLabelStyle: {
      fontSize: 18},tabBarStyle: {
        height: 100
    }}}>
      <Tab.Screen name="Main" component={Home} options={{headerShown:false,
tabBarIcon: ({ color, size }) => (
  <FontAwesome 
  name='code'
  size={40}
  color={color}
  />
)
      }}/>
      <Tab.Screen name="Social" component={SocialMedias} options={{headerShown:false,
tabBarIcon: ({ color, size }) => (
  <FontAwesome 
  name='instagram'
  size={40}
  color={color}
  />
)
      }}/>
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
<Stack.Navigator>
  <Stack.Screen name="Home"component={Tabs} options={{headerShown:false}}/>
  <Stack.Screen name="About"component={About} />
</Stack.Navigator>

    </NavigationContainer>
  );
}


