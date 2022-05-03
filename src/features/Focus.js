import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../components/RoundedButton";

export function Focus({setCurrentSubject}) {
  const [ subject , setSubject] = useState("")
  
  console.log({subject})
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.TextInput}
          mode="outlined"
          label="what would you like to focus on?"
          placeholder="Type your thought"
          activeOutlineColor="firebrick"
          outlineColor="blue"
          onChangeText={setSubject}
        />
        <RoundedButton
          onPress={() => setCurrentSubject(subject)}
          title={"add"}
          uri={"https://img.icons8.com/material-outlined/24/000000/add.png"}
        />
        {/* passing the whole function so be able to set the subject or it will give an error just passing the prop whithout the function */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: .5,
    justifyContent: "space-evenly"
  },
  inputContainer: {
    flex: .7,
    padding: 25,
    justifyContent: "flex-start",
  },
});
