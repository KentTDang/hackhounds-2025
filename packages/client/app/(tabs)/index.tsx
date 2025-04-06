import {
  Image,
  StyleSheet,
  Platform,
  useColorScheme,
  ScrollView,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";

export default function HomeScreen() {
  const [timeLeft, setTimeLeft] = useState(12 * 60 * 60); // 12 hours in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    const pad = (n: number) => String(n).padStart(2, "0");

    return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
  };

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 10,
        paddingTop: 50,
        paddingBottom: 70,
      }}
      style={styles.test}
    >
      <ThemedView style={styles.moneycontainer}>
        <ThemedView style={styles.tasktext}>
          <ThemedText type="title" style={styles.tasktitle}>
            Group Motive!
          </ThemedText>
          <ThemedText type="subtitle" style={styles.taskdesc}>
            Task Descmeowmeo
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.tasktime}>
          <ThemedText type="defaultSemiBold" style={styles.tasktimedesc}>
            Time Left Today:
          </ThemedText>
          <ThemedText type="subtitle" style={styles.tasktimeleft}>
            {formatTime(timeLeft)}
          </ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.namecontainer}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Leaderboard</ThemedText>
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedView style={styles.lefthandstep}>
            <ThemedText type="subtitle">Pearce Packman</ThemedText>
            <ThemedText>
              <ThemedText type="defaultSemiBold">
                {" "}
                Has done their task!
              </ThemedText>
            </ThemedText>
          </ThemedView>
          <ThemedView style={styles.checkBoxCont}>
            <ThemedView style={styles.checkBox}></ThemedView>
            <Image
              source={require("../../assets/images/check.png")}
              style={styles.checkMark}
            />
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedView style={styles.lefthandstep}>
            <ThemedText type="subtitle">Kent Dang</ThemedText>
            <ThemedText>
              <ThemedText type="defaultSemiBold">
                {" "}
                Has not done their task!
              </ThemedText>
            </ThemedText>
          </ThemedView>
          <ThemedView style={styles.checkBoxCont}>
            <ThemedView style={styles.checkBox}></ThemedView>
            <Image
              source={require("../../assets/images/check.png")}
              style={styles.checkMark}
            />
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedView style={styles.lefthandstep}>
            <ThemedText type="subtitle">Jonathan Dargakis</ThemedText>
            <ThemedText>
              <ThemedText type="defaultSemiBold">
                {" "}
                Has not done their task!
              </ThemedText>
            </ThemedText>
          </ThemedView>
          <ThemedView style={styles.checkBoxCont}>
            <ThemedView style={styles.checkBox}></ThemedView>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: "auto",
    borderBottomWidth: 1,
    borderBottomColor: "#cad2c5",
    marginBottom: 15,
    marginLeft: 8,
    marginRight: 8,
  },
  stepContainer: {
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 12,
    minHeight: 70,
    maxHeight: 150,
    backgroundColor: "#cad2c5",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  reactLogo: {
    height: 500,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  test: {
    backgroundColor: "#e5e8e3",
  },
  moneycontainer: {
    backgroundColor: "#52796f",
    height: 150,
    width: "95%",
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "2%",
    marginTop: "2%",
    borderRadius: 20,
    alignItems: "center",
    textAlign: "center",
  },
  namecontainer: {
    display: "flex",
    height: "auto",
    marginBottom: 0,
    borderRadius: 10,
    borderColor: "#cad2c5",
  },
  lefthandstep: {},
  checkBox: {
    height: 30,
    width: 30,
    backgroundColor: "#1a2226",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "auto",
    opacity: 0.3,
    marginTop: "auto",
    borderColor: "#383b38",
    borderWidth: 1,
    left: 0,
  },
  checkMark: {
    position: "absolute",
    top: -2,
    left: 8,
    height: 42,
    width: 42,
    transform: [{ rotate: "-12deg" }],
    tintColor: "#383b38",
  },
  checkBoxCont: {
    position: "relative",
    marginLeft: "auto",
    height: 50,
    width: 50,
    display: "flex",
  },

  tasktext: {
    textAlign: "center",
    width: "100%",
    marginTop: "5%",
    marginBottom: "auto",
  },
  tasktitle: {
    textAlign: "center",
    color: "#d5d9d2",
  },
  taskdesc: {
    textAlign: "center",
    width: "100%",
    color: "#d5d9d2",
    flexWrap: "wrap",
  },
  tasktime: {
    marginBottom: "2%",
    color: "#d5d9d2",
  },
  tasktimedesc: {
    color: "#d5d9d2",
    marginBottom: 0,
    textAlign: "center",
  },
  tasktimeleft: {
    textAlign: "center",
    color: "#d5d9d2",
  },
});
