import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { RoundedButton } from "../components/RoundedButton";

export function Timing({ onChangeTime }) {
    console.log({onChangeTime})
  return (
    <View >
      <RoundedButton
        uri={"https://img.icons8.com/ios-filled/50/000000/forward-10.png"}
        title={"minutes"}
        onPress={() => onChangeTime(5)}
      />
      <RoundedButton
        uri={"https://img.icons8.com/ios-filled/50/000000/forward-15.png"}
        title={"minutes"}
        onPress={() => onChangeTime(10)}
      />
      <RoundedButton
        title={"minutes"}
        onPress={() => onChangeTime(30)}
        uri={"https://img.icons8.com/ios-filled/50/000000/forward-30.png"}
      />
    </View>
  );
}

{/* <img src="https://img.icons8.com/carbon-copy/100/000000/15-circled.png" />; */}