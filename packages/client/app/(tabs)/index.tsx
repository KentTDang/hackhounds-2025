import { Image, StyleSheet, Platform, useColorScheme, ScrollView, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function HomeScreen() {
  return (

    <ScrollView contentContainerStyle = {{paddingHorizontal: 10, paddingTop: 50, paddingBottom: 70}} style={styles.test}>
      <ThemedView style = {styles.moneycontainer}>
        
      </ThemedView>
      
      
      

      
      <ThemedView style = {styles.namecontainer}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Leaderboard</ThemedText>
        
      </ThemedView>
      

      <ThemedView style={styles.stepContainer}>
        <ThemedView style = {styles.lefthandstep}>
        <ThemedText type="subtitle">Pearce Packman</ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">       Has done their task!</ThemedText>
          
        </ThemedText>
        </ThemedView>
        <ThemedView style ={styles.checkBoxCont}>
          <ThemedView style={styles.checkBox}></ThemedView>
          <Image
            source = {require('/Users/pearcepackman/Documents/Personal/CodingProjects/HackHounds2025/hackhounds-2025/packages/client/assets/images/check.png')}
            style={styles.checkMark}
          />
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedView style = {styles.lefthandstep}>
        <ThemedText type="subtitle">Kent Dang</ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">       Has not done their task!</ThemedText>
          
        </ThemedText>
        </ThemedView>
        <ThemedView style ={styles.checkBoxCont}>
          <ThemedView style={styles.checkBox}></ThemedView>
          <Image
            source = {require('/Users/pearcepackman/Documents/Personal/CodingProjects/HackHounds2025/hackhounds-2025/packages/client/assets/images/check.png')}
            style={styles.checkMark}
          />
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedView style = {styles.lefthandstep}>
        <ThemedText type="subtitle">Johnathan Lastname</ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">       Has not done their task!</ThemedText>
          
        </ThemedText>
        </ThemedView>
        <ThemedView style ={styles.checkBoxCont}>
          <ThemedView style={styles.checkBox}></ThemedView>
          
        </ThemedView>
      </ThemedView>
      </ThemedView>
    </ScrollView>
    

  );
}



const styles = StyleSheet.create({
  titleContainer: {
    
    flexDirection: 'row',
    alignItems: 'center',
    
    //backgroundColor: '#354f52',
    height: 'auto',
    borderBottomWidth: 1,
    borderBottomColor: '#cad2c5',
    marginBottom: 15,
    marginLeft: 8,
    marginRight: 8,
    
    
    
    
  },
  stepContainer: {
    
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    //backgroundColor: '#354f52',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
    
    
    
    
  },
  
  reactLogo: {
    height: 500,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  test: {
    backgroundColor: "#2f3e46"
  },
  moneycontainer: {
    backgroundColor: "#52796f",
    height: 300,
    width: 300,
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '2%',
    marginTop: '5%'
  },
  namecontainer: {
    //backgroundColor: "#52796f",
    display: 'flex',
    
    height: 'auto',
    
    marginBottom: 0,
    borderRadius: 10,
    borderColor: '#cad2c5',
    //borderWidth: 1,
     
    
  },
  name: {
    
    marginBottom: '10%',
    backgroundColor: "#cad2c5",
    
  },
  lefthandstep: {
    //backgroundColor: "#84a98c"
  },
  checkBox: {
    height: 30,
    width: 30,
    backgroundColor: '#1a2226',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 'auto',
    opacity: 0.4,
    //position: 'absolute',
    marginTop: 'auto',
    borderColor: '#84a98c',
    borderWidth: 1,
    left: 0,
    

    
  },
  checkMark: {
    position: 'absolute',
    top: -2,
    left: 8,
    height: 42,
    width: 42,
    transform: [{rotate: '-12deg'}],
    tintColor: '#cad2c5'
    
  },
  checkBoxCont: {
    position: 'relative',
    //backgroundColor: '#cad2c5',
    marginLeft: 'auto',
    height: 50,
    width: 50,
    display: 'flex',

    

  },

  
  
  
});
