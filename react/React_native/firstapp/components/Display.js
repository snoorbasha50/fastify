import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const Display = () => {
  return (
    <View style={{ flex: 1 }}>
      <TextInput placeholder="Enter text" style={styles.input}></TextInput>
    </View>
  );
};

export default Display;

const styles = StyleSheet.create({
  input: {
    height: 60,

    border: "1px solid grey",
    width: 300,
    fontSize: 20,
  },
});
