import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const StartScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('./src/IMG/Nwjns.png')} // Ganti dengan path gambar Anda
        style={styles.logo}
      />

      {/* App Name */}
      <Text style={styles.appName}>NewsJeans</Text>

      {/* Get Started Button */}
      <TouchableOpacity   style={styles.button}
  onPress={() => navigation.navigate("Home")}
>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4A2DAA", // Purple background
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 150, // Ubah ukuran sesuai kebutuhan
    height: 150, // Ubah ukuran sesuai kebutuhan
    marginBottom: 20,
  },
  appName: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 10,
  },
  buttonText: {
    color: "#4A2DAA",
    fontWeight: "bold",
    fontSize: 16,
  },
  loginText: {
    color: "#D1D1D1",
    fontSize: 14,
    textDecorationLine: "underline",
  },
});

export default StartScreen;
