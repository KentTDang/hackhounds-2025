import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getDatabase, ref, onValue } from 'firebase/database';
import { FIREBASE_APP } from '../FirebaseConfig';
import { RemoveTask } from './RemoveTask';

export const GetTasks = () => {
  const [tasks, setTasks] = useState<{ id: string; task: string }[]>([]);

  useEffect(() => {
    const db = getDatabase(FIREBASE_APP);
    const tasksRef = ref(db, 'tasks');

    onValue(tasksRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const tasksArray = Object.entries(data).map(([id, task]) => ({
          id,
          task: task as string,
        }));
        setTasks(tasksArray);
      } else {
        setTasks([]);
      }
    });

    return () => {};
  }, []);

  return (
    <View style={styles.taskContainer}>
      {tasks.map(({ id, task }) => (
        <View key={id} style={styles.taskItem}>
          <Text style={styles.taskText}>{task}</Text>
          <RemoveTask taskId={id} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  taskItem: {
    padding: 10,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  taskText: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
});