import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartScreen from './src/Started';
import {StatusBar} from 'react-native';
import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Halaman1 from './src/Halaman1';
import Content from './src/Isi'
import Header from './src/components/Header';
import Filters from './src/components/Fillters';
import NewsList from './src/components/NewsList';
import BottomNavigation from './src/components/BottomNavigation';

const App2 = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Filters />
      <NewsList />
      <BottomNavigation />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

//const Stack = createNativeStackNavigator();

   // const App1 = () => {
   //  return (
   //     <NavigationContainer>
   //       <Stack.Navigator>
   //         <Stack.Screen
   //           name="GetStarted"
   //           component={StartScreen}
   //           options={{headerShown: false}}
   //         />
   //         <Stack.Screen
   //           name="Home"
   //           component={Home}
   //           options={{headerShown: false}}
   //         />
   //         <Stack.Screen name="Isi" component={Content}
   //         options={{headerShown: false}} />
   //       </Stack.Navigator>
   //     </NavigationContainer>
   //   );
   // };

export default App2;
