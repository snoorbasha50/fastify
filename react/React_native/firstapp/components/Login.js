import React from "react";
import { Button, Text, View, onPress, StyleSheet, TextInput } from "react-native";

const Login = (props) => {
  const login = () => {
    alert("Hi This is Login page");
  };

  return (
    <>
      <View>
        <Text style={styles.log}>Login page</Text>
        <Button title="Login" onPress={login} />
        <Text>{props.send}</Text>
        <TextInput placeholder="Enter your name"></TextInput>
      </View>
    </>
  );
};

export default Login;
const styles = StyleSheet.create({
  log: {
    fontSize:50
  },
});
