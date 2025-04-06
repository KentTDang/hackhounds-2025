import React from 'react'
import Camera from "@/components/Camera"
import { StyleSheet, View } from 'react-native';

export default function camera() {
  return (
    
      <Camera />
    
    
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // for better contrast
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
});