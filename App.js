import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Switch,
} from "react-native";

export default function App() {
  const [text, setText] = React.useState(" ");
  const [dark, setDark] = React.useState(false);
  const [isEnabled, setIsEnabled] = React.useState(false);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    setDark(!dark);
  };

  return (
    <View style={[styles.container, dark ? styles.dark : ""]}>
      <Text style={styles.title}>React Native Lab 2</Text>
      <TextInput
        style={styles.inputField}
        clearTextOnFocus={true}
        onChangeText={(text) => setText(text)}
        value={text}
      />
      <Text style={styles.dynamicText}>{text}</Text>
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => setText(" ")}
      >
        <Text style={styles.clearButton}>Clear Text</Text>
      </TouchableOpacity>
      <Switch
        style={styles.switch}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => toggleSwitch()}
        value={isEnabled}
      ></Switch>
      <Text style={styles.author}>Submitted By: Himanshu (301296001)</Text>
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
  dark: {
    backgroundColor: "#0F0E0E",
    color: "white",
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
  btnContainer: {
    backgroundColor: "purple",
    padding: 10,
    borderRadius: 5,
  },
  clearButton: {
    color: "white",
    fontWeight: "700",
  },
  switch: {
    margin: 20,
  },
  author: {
    color: "gray",
    fontSize: 12,
  },
});
