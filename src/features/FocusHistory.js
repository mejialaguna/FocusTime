import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Button } from "react-native-paper";
import { RoundedButton } from "../components/RoundedButton";

import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";

export function FocusHistory({ history, clearHistory }) {
  const styles = StyleSheet.create({
    container: {
      padding: spacing.md,
      flex: 1,
    },
    logo: {
      width: 15,
      height: 15,
    },
    title: {
      color: colors.white,
      fontSize: fontSizes.lg,
      fontWeight: "bold",
      paddingBottom: 30,
      textAlign: history ? "center" : null,
    },
    item: {
      fontSize: fontSizes.md,
      color: colors.white,
      paddingTop: spacing.l,
    },
    button: {
      alignItems: "center",
      padding: 10,
    },
    button2: {
      justifyContent: "flex-end",
      alignContent: "center",
      textAlign: "center",
      marginTop: 200,
    },
    listItems: {
      marginTop: 20,
    },
  });

  if (!history || !history.length) {
    return <Text style={styles.title}> We haven't focus on anyThing yet!</Text>;
  }

  // const renderItem = ({ item }) => <Text style={styles.item}>{item} </Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thing we haved Focus on:</Text>

      <View>
        {history.map((item, idx) => {
          return (
            <View key={idx} style={styles.button}>
              <Text style={styles.item}>
                {idx + 1} {item}
              </Text>
            </View>
          );
        })}
      </View>
      <View style={styles.button2}>
        <RoundedButton
          title={"delete"}
          onPress={clearHistory}
          color={"red"}
          uri={"https://img.icons8.com/color/48/000000/delete-forever.png"}
        />
      </View>
    </View>
  );
}
{/* <img src="https://img.icons8.com/color/48/000000/delete-forever.png" />; */}