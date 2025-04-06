import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, ActivityIndicator, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { defaultStyles } from '../constants/Styles'
import { FIREBASE_AUTH } from "../FirebaseConfig.js"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const Page = () => {
  const { type } = useLocalSearchParams()
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')  // For storing error messages
  const auth = FIREBASE_AUTH

  const handleAuth = async () => {
    setLoading(true)
    try {
      if (type === 'signup') {
        await createUserWithEmailAndPassword(auth, email, password)
        router.replace('/login')  // Go back to login page after signup
      } else {
        await signInWithEmailAndPassword(auth, email, password)
        router.replace('/(tabs)')  // Proceed to main app after login
      }
    } catch (error: any) {
      // Check if the error is due to incorrect password
      if (error.code === 'auth/wrong-password') {
        setErrorMessage('Incorrect password. Please try again.')
      } else {
        setErrorMessage(`Authentication failed: ${error.message}`)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={Platform.select({ ios: 0, android: 500 })}
    >
      {loading && (
        <View style={defaultStyles.loadingOverlay}>
          <ActivityIndicator size='large' color='#fff' />
        </View>
      )}

      <View style={styles.formWrapper}>
        <Text style={styles.mainTitle}>
          {type === 'signup' ? 'Create Account' : 'Welcome Back'}
        </Text>

        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color="#666" style={styles.icon} />
          <TextInput
            autoCapitalize='none'
            placeholder='Type your email'
            style={styles.inputField}
            value={email}
            onChangeText={setEmail}
            keyboardType='email-address'
            placeholderTextColor="#666"
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#666" style={styles.icon} />
          <TextInput
            autoCapitalize='none'
            placeholder='Type your password'
            style={styles.inputField}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="#666"
          />
        </View>

        {/* Display the error message in red if it exists */}
        {errorMessage && (
          <Text style={styles.errorText}>{errorMessage}</Text>
        )}

        <TouchableOpacity 
          onPress={handleAuth}
          style={[defaultStyles.btn, styles.btnPrimary]}
        >
          <Text style={styles.btnPrimaryText}>
            {type === 'signup' ? 'Sign Up' : 'Login'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => router.push(type === 'signup' ? '/login' : '/login?type=signup')}
          style={styles.switchTextContainer}
        >
          <Text style={styles.switchText}>
            {type === 'signup' 
              ? "Already have an account? " 
              : "Don't have an account? "}
            <Text style={styles.switchTextBold}>
              {type === 'signup' ? "Login" : "Sign Up"}
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

// Keep the rest of the styles the same
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  formWrapper: {
    maxWidth: 400,
    width: '100%',
    alignSelf: 'center',
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  icon: {
    marginRight: 10,
  },
  inputField: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#333',
  },
  btnPrimary: {
    backgroundColor: "#52796F",
    borderRadius: 12,
    height: 50,
    justifyContent: 'center',
    marginTop: 10,
  },
  btnPrimaryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  switchTextContainer: {
    marginTop: 20,
    alignSelf: 'center',
  },
  switchText: {
    color: '#666',
    textAlign: 'center',
  },
  switchTextBold: {
    fontWeight: '600',
    color: '#52796F',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  }
})

export default Page
