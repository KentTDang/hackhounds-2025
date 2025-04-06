import {
  StyleSheet,
  Image,
  Modal,
  TextInput,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { AddTask } from "../Add";
import { getDatabase, ref, push } from 'firebase/database';
import { FIREBASE_APP } from '../../FirebaseConfig'; // Import Firebase

import { Button } from "react-native";
export default function TabTwoScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [newTask, setNewTask] = useState('');

  const handleAddTaskClick = () => {
    setIsAddingTask(true);
  };

  const handleInputChange = (text: string) => {
    setNewTask(text);
  };

  const handleSaveTask = () => {
    if (newTask.trim() !== '') {
      const db = getDatabase(FIREBASE_APP);
      const tasksRef = ref(db, 'tasks');
      push(tasksRef, newTask)
        .then(() => {
          console.log('Task added successfully!');
          setNewTask(''); // Clear the input field
          setIsAddingTask(false); // Hide the input modal
        })
        .catch((error) => {
          console.error('Error adding task:', error);
        });
    }
  };

  const handleCancelTask = () => {
    setIsAddingTask(false);
    setNewTask('');
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
      <SafeAreaProvider>
        <SafeAreaView style={styles.centeredView}>
          {modalVisible}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <ThemedView style={styles.toppopup}>
                  <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Image
                      source={require("../../assets/images/close.png")}
                      style={styles.closetab}
                    />
                  </TouchableOpacity>
                </ThemedView>

                <ThemedView style={styles.goalform}>
                  <ThemedText type="subtitle" style={styles.tasktitle}>
                    Goal Name
                  </ThemedText>
                  <TextInput style={styles.inputbox}></TextInput>
                  <ThemedText type="subtitle" style={styles.tasktitle}>
                    Goal Description
                  </ThemedText>
                  <TextInput style={styles.inputbox}></TextInput>
                  <AddTask />
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => setModalVisible(false)}
                  >
                    <ThemedText type="subtitle" style={styles.formbutton}>
                      Finish
                    </ThemedText>
                  </TouchableOpacity>
                </ThemedView>
              </View>
            </View>
          </Modal>
        </SafeAreaView>
      </SafeAreaProvider>
      <ThemedView style={styles.moneycontainer}>
        <ThemedView style={styles.tasktext}>
          <ThemedText type="title" style={styles.tasktitle}>
            Make a goal!
          </ThemedText>
          <ThemedText type="subtitle" style={styles.taskdesc}>
            Click Here To Get Started
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.tasktime}>
          <View style={styles.addgoalbutton}>
            <Text style={styles.addgoal} onPress={handleAddTaskClick}>
              Add a Goal
            </Text>

            <Modal
              visible={isAddingTask}
              animationType="slide"
              transparent={true}
              onRequestClose={handleCancelTask}
            >
              <View style={styles.modalView}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter task"
                  value={newTask}
                  onChangeText={handleInputChange}
                />
                <Button title="Save" onPress={handleSaveTask} />
                <Button title="Cancel" onPress={handleCancelTask} />
              </View>
            </Modal>
          </View>
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Updates</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedView style={styles.lefthandstep}>
          <ThemedText type="subtitle">Goal Name</ThemedText>
          <ThemedText style={styles.alertdesc}>
            <ThemedText type="defaultSemiBold">
              Completed for today, nice job!
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
          <ThemedText type="subtitle">Goal Name</ThemedText>
          <ThemedText style={styles.alertdesc}>
            <ThemedText type="defaultSemiBold">
              Completed for today, nice job!
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
          <ThemedText type="subtitle">Goal Name</ThemedText>
          <ThemedText>
            <ThemedText type="defaultSemiBold">
              {" "}
              Completed for today, nice job!
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
          <ThemedText style={styles.alertdesc}>
            <ThemedText type="defaultSemiBold">
              Completed XTASK today at 12:00:00, nice job!
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
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
    //justifyContent: 'center',
    alignItems: "center",
    textAlign: "center",
  },
  tasktext: {
    textAlign: "center",
    //backgroundColor: '#cad2c5',
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
  },
  tasktimedesc: {
    marginBottom: 0,
    textAlign: "center",
  },
  tasktimeleft: {
    textAlign: "center",
  },
  plus: {
    height: 60,
    width: 60,
    tintColor: "#383b38",
    backgroundColor: "#d5d9d2",
    marginBottom: "2%",
  },
  addgoalbutton: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 40,
    borderRadius: 30,
    backgroundColor: "#2f3e46",
    marginBottom: "2%",
  },
  addgoal: {
    color: "#d5d9d2",
    justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#2f3e46",
    borderRadius: 20,
    padding: 10,
    height: 350,
    width: "80%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 0,
    textAlign: "center",
    color: "#d5d9d2",
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
  checkBox: {
    height: 30,
    width: 30,
    backgroundColor: "#1a2226",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "auto",
    opacity: 0.3,
    //position: 'absolute',
    marginTop: "auto",
    borderColor: "#383b38",
    borderWidth: 1,
    left: 0,
  },
  checkBoxCont: {
    position: "relative",
    //backgroundColor: '#cad2c5',
    marginLeft: "auto",
    height: 50,
    width: 50,
    display: "flex",
  },
  checkMark: {
    position: "absolute",
    top: -2,
    left: 8,
    height: 42,
    width: 42,
    transform: [{ rotate: "-12deg" }],
    tintColor: "black",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",

    gap: 8,
    //backgroundColor: '#354f52',
    height: "auto",
    borderBottomWidth: 1,
    borderBottomColor: "#cad2c5",
    marginBottom: 15,
    marginLeft: 8,
    marginRight: 8,
  },
  lefthandstep: {
    //backgroundColor: "#84a98c",
    width: "80%",
    display: "flex",
  },
  alertdesc: {
    //backgroundColor: 'orange',
    marginLeft: 20,
  },
  inputbox: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "100%",
    paddingLeft: 10,
    marginTop: 10,
    borderRadius: 20,
    fontSize: 18,
    color: "#d5d9d2",
  },
  goalform: {
    //backgroundColor: 'purple',
    width: "90%",
    height: "90%",
    display: "flex",
    gap: 10,
    alignContent: "center",
  },
  formbutton: {
    backgroundColor: "#84a98c",
    textAlign: "center",
    color: "#d5d9d2",
    borderRadius: 30,
    width: 160,
    height: 25,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: 0,
  },
  toppopup: {
    //backgroundColor: 'orange',
    width: "97%",
  },
  closetab: {
    height: 20,
    width: 20,
  },
  addText: {
    fontSize: 20,
    color: 'green',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 20, // Add space below "Add" button
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
});
