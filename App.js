import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [text, setText] = React.useState(" ");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Lab 2</Text>
      <TextInput
        style={styles.inputField}
        clearTextOnFocus={true}
        onChangeText={(text) => setText(text)}
      />
      <Text style={styles.dynamicText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginBottom: 20,
    textTransform: "uppercase",
    fontWeight: "700",
    color: "purple",
    fontSize: 22,
  },
  inputField: {
    borderWidth: 2,
    borderColor: "gray",
    width: "50%",
    padding: 10,
    borderRadius: 5,
    color: "purple",
    fontSize: 18,
  },
  dynamicText: {
    margin: 20,
    fontSize: 16,
    color: "gray",
  },
});
