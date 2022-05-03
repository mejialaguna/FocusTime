import React, { useState } from "react";
import { View, Text, StyleSheet, Vibration } from "react-native";
import { ProgressBar } from "react-native-paper";
import { Countdown } from "../components/CountDown";
import { RoundedButton } from "../components/RoundedButton";
import { colors } from "../utils/colors";
import { spacing } from "../utils/sizes";
import { Timing } from "./Timing";
import Constants from "expo-constants";
import { useKeepAwake } from "expo-keep-awake";

export function Timer({ focusSubject, clearSubject, onTimerEnd }) {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);
  console.log({ progress });

  const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
  ];

  function onEnd(reset) {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject)
  }

  return (
    <View style={styles.container}>
      <View style={styles.countDown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={(progress) => setProgress(progress)}
          onEnd={onEnd}
        />
      </View>
      <View style={{ paddingTop: spacing.xxl }}>
        <ProgressBar
          color={progress < "0.66" ? colors.onRed : colors.progressBar}
          progress={progress}
        />
      </View>
      <View style={{ paddingTop: spacing.xl }}>
        <Text style={styles.title}> Let Focusing on :</Text>
        <Text style={styles.task}> {focusSubject}</Text>
      </View>

      <View style={styles.buttonWrapper}>
        {!isStarted ? (
          <RoundedButton
            onPress={() => setIsStarted(true)}
            title={"Start"}
            uri={
              "https://img.icons8.com/fluency-systems-filled/48/000000/start.png"
            }
          />
        ) : (
          <RoundedButton
            onPress={() => setIsStarted(false)}
            title={"Pause"}
            uri={
              "https://img.icons8.com/fluency-systems-regular/48/000000/pause--v1.png"
            }
          />
        )}
      </View>
      <View styles={styles.buttonWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.cancelWrapper}>
        <RoundedButton
          title={"cancel"}
          uri={"https://img.icons8.com/dotty/80/000000/cancel.png"}
          onPress={() => {
            clearSubject();
          }}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  countDown: {
    // flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: {
    // flex: 0.3,
    flexDirection: "row",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
  },
  cancelWrapper: {
    marginTop: 50,
  },
  task: {
    color: colors.white,
    textAlign: "center",
  },
});
