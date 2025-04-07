// App.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AddTask } from '../Add';
import { GetTasks } from '../GetTasks';


function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Tasks</Text>
      <GetTasks />
      <AddTask />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centers everything vertically
    alignItems: 'center', // Centers everything horizontally
    backgroundColor: '#fff',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, // Space between heading and tasks list
    textAlign: 'center',
  },
});

export default App;