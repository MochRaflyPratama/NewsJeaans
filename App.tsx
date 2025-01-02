import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartScreen from "./src/Started";
import HomeScreen from "./src/Home";

const Stack = createNativeStackNavigator();

const App = () => {
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
          options={{ headerTitle: "Home Screen" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
