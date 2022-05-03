import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { colors } from "../utils/colors";

export const RoundedButton = ({ onPress, title, uri , color = "white" }) => {
  return (
    <View>
      <Button
        style={styles.btn}
        icon={{
          uri,
        }}
        mode="outlined"
        color={color}
        onPress={onPress}
      >
        {title}
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  btn: {
    marginTop: 20,
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 20,
  },
});
