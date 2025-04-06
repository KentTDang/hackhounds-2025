import React from 'react';
import { Text } from 'react-native';
import { getDatabase, ref, remove } from 'firebase/database';
import { FIREBASE_APP } from '../FirebaseConfig'; // Import Firebase

type RemoveTaskProps = {
  taskId: string;
};

export const RemoveTask = ({ taskId }: RemoveTaskProps) => {
  const handleRemoveTask = () => {
    console.log('Removing task with ID:', taskId);  // Debugging line
    const db = getDatabase(FIREBASE_APP);
    const taskRef = ref(db, `tasks/${taskId}`);

    remove(taskRef)
      .then(() => {
        console.log('Task removed successfully!');
      })
      .catch((error) => {
        console.error('Error removing task:', error);
      });
  };

  return (
    <Text
      style={{ color: 'red', fontWeight: 'bold' }}
      onPress={handleRemoveTask}
    >
      Remove
    </Text>
  );
};
