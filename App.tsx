
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartScreen from "./src/Started";
import HomeScreen from "./src/Home";
import Header from "./src/Header";
import { StatusBar } from "react-native";
import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import Halaman1 from "./src/Halaman1";
import Home from './src/Home_API';

const App2 = () => {
  return(
    <>
      {/* <Text style={{fontSize:10}}>Hello Teknik Informatika</Text> */}
      {/* <Halaman2 /> */}
      {/* <Layout /> */}
      <Home />
    </>
  );
}


const Stack = createNativeStackNavigator();

const App1 = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="GetStarted"
          component={StartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown:false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App1;
