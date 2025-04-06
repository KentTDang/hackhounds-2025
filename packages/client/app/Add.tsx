// Add.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, StyleSheet } from 'react-native';
import { getDatabase, ref, push } from 'firebase/database';
import { FIREBASE_APP } from '../FirebaseConfig'; // Import Firebase

export const AddTask = () => {
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
    <View style={styles.centeredView}>
      <Text style={styles.addText} onPress={handleAddTaskClick}>
        Add
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
  );
};

const styles = StyleSheet.create({
  centeredView: {
    alignItems: 'center',
    marginTop: 10,
  },
  addText: {
    fontSize: 20,
    color: 'green',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 20, // Add space below "Add" button
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent background
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
