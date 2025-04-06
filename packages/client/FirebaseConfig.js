import { initializeApp } from "firebase/app";
import { initializeAuth,getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsaJu46PkgmZ6yLzrnjiQZ0bw6PjhYJsM",
  authDomain: "hackhounds2025.firebaseapp.com",
  projectId: "hackhounds2025",
  storageBucket: "hackhounds2025.firebasestorage.app",
  messagingSenderId: "306325530272",
  appId: "1:306325530272:web:61ace83c06366c994b4bc5",
  measurementId: "G-5PHBK105GW"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);