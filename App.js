import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  ImageBackground,
  Alert,
} from "react-native";

const backgroundImage = require("./assets/aesthetic-horizon-1366×768.jpg"); // Use a relative path
const pokemonGoLogo = require("./assets/pokemon_go_logo.png"); // Replace with your logo image path

const LoginScreen = ({ navigation }) => {
  // Pass navigation prop
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const validateLogin = () => {
    // You can implement your validation logic here.
    // For simplicity, let's assume a valid login if both fields are non-empty.
    return username.trim() !== "" && password.trim() !== "";
  };

  const handleLogin = () => {
    // Check if the username and password are valid.
    if (!validateLogin()) {
      // Display an error message.
      Alert.alert(
        "Invalid Credentials",
        "Please enter valid username and password."
      );
      return;
    }

    // Perform the login (you can implement this logic here).
    // For simplicity, we'll just show a success message.
    Alert.alert("Login Successful", "Welcome to Pokémon GO!");
  };

  const handleRegister = () => {
    // Implement the logic to navigate to the registration screen
    // or perform the registration action here.
    // You can use the 'navigation' prop to navigate to another screen.
    // Example: navigation.navigate('RegistrationScreen');
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={pokemonGoLogo} style={styles.logo} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Tên người dùng"
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Mật khẩu"
            secureTextEntry={true} // Hide password input
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <Button style={styles.button} title="Đăng nhập" onPress={handleLogin} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or "stretch" for different image resizing options
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Add opacity to make the background more readable
    justifyContent: "center", // Center content vertically
    padding: 16, // Add some padding to the content
  },
  logoContainer: {
    alignItems: "center", // Center the logo horizontally
  },
  logo: {
    width: 300, // Set the width of the logo image
    height: 200, // Set the height of the logo image
    marginBottom: 16, // Add spacing below the logo
    marginTop: -128, // Add spacing above the logo
  },
  inputContainer: {},
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 8,
    marginBottom: 12, // Add some spacing between inputs
    borderRadius: 8,
  },
  button: {
    height: 40,
    borderRadius: 8,
    marginBottom: 8, // Add spacing between buttons
  },
});

export default LoginScreen;
