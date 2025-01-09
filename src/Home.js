import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {colors} from './Colors'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>NewsJeans</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",

  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },

  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.black,
  },  
});

export default HomeScreen;
