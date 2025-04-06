// GetTasks.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getDatabase, ref, onValue } from 'firebase/database';
import { FIREBASE_APP } from '../FirebaseConfig'; // Import Firebase

export const GetTasks = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  useEffect(() => {
    const db = getDatabase(FIREBASE_APP);
    const tasksRef = ref(db, 'tasks');

    onValue(tasksRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const tasksArray = Object.values(data) as string[];
        setTasks(tasksArray);
      } else {
        setTasks([]);
      }
    });

    return () => {};
  }, []);

  return (
    <View style={styles.taskContainer}>
      {tasks.map((task, index) => (
        <Text key={index} style={styles.taskItem}>
          {task}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    marginTop: 20, // Space between tasks and Add button
    width: '100%',
    alignItems: 'center',
  },
  taskItem: {
    padding: 10,
    marginVertical: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
