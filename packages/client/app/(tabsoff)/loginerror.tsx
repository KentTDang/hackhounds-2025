import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, ActivityIndicator, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { defaultStyles } from '../../constants/Styles'
import { FIREBASE_AUTH } from "../../FirebaseConfig.js"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const LoginErrorPage = () => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const auth = FIREBASE_AUTH

  const handleLogin = async () => {
    setLoading(true)
    try {
      await signInWithEmailAndPassword(auth, email, password)
      router.replace('/(tabs)')
    } catch (error) {
      // Stay on this screen, error message stays visible
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
        <Text style={styles.mainTitle}>Welcome Back</Text>

        <Text style={styles.errorText}>Incorrect email or password. Please try again.</Text>

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

        <TouchableOpacity 
          onPress={handleLogin}
          style={[defaultStyles.btn, styles.btnPrimary]}
        >
          <Text style={styles.btnPrimaryText}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

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
    marginBottom: 30,
    color: '#333',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 16,
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
})

export default LoginErrorPage
