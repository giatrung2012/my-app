import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Store from "@react-native-firebase/firestore";
import { initializeApp } from "@react-native-firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcLNuRVmNhnc2DX0crdj8PwvEmxLe_bJI",
  authDomain: "fir-auth-293a5.firebaseapp.com",
  projectId: "fir-auth-293a5",
  storageBucket: "fir-auth-293a5.appspot.com",
  messagingSenderId: "953102908711",
  appId: "1:953102908711:web:2d588ba0cc5996a0463d02",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const App = () => {
  const User = Store().collection("User");
  User.add({
    username: "trung",
    password: "123",
  });

  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
