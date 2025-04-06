import { StyleSheet, Image, Modal, TextInput, Platform, ScrollView, Text, TouchableOpacity, View, Pressable } from 'react-native';
import React, {useState} from 'react'
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context'

export default function TabTwoScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    
    <ScrollView contentContainerStyle = {{paddingHorizontal: 10, paddingTop: 50, paddingBottom: 70}} style={styles.test}>
      <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
        {modalVisible}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <ThemedView style = {styles.toppopup}>
              <TouchableOpacity onPress = {() => setModalVisible(false)}>
              <Image
                  source = {require('../../assets/images/close.png')}
                  style = {styles.closetab}
                  
                />
              </TouchableOpacity>
                <ThemedText type = 'subtitle' style={styles.modalText}>Personal Information</ThemedText>
                
              </ThemedView>
              
                <ThemedText type = 'subtitle'>Name</ThemedText>
                <ThemedText type = 'defaultSemiBold' style = {styles.popupdesc}>Actual info</ThemedText>
                <ThemedText type = 'subtitle' style = {styles.tasktitle}>Whatever</ThemedText>
                <ThemedText type = 'defaultSemiBold' style = {styles.popupdesc}>Actual info</ThemedText>
                <ThemedText type = 'subtitle' style = {styles.tasktitle}>Info</ThemedText>
                <ThemedText type = 'defaultSemiBold' style = {styles.popupdesc}>Actual info</ThemedText>
                <ThemedText type = 'subtitle' style = {styles.tasktitle}>Info</ThemedText>
                <ThemedText type = 'defaultSemiBold' style = {styles.popupdesc}>Actual info</ThemedText>
                
                <TouchableOpacity style = {styles.button} onPress = {() => setModalVisible(false)}>
                  <ThemedText type = 'subtitle' style = {styles.formbutton}>CLOSE</ThemedText>
                </TouchableOpacity>
              
            </View>
          </View>
        </Modal>

      </SafeAreaView>
    </SafeAreaProvider>
      <ThemedView style = {styles.moneycontainer}>
        <ThemedView style = {styles.tasktext}>
        <Image
            source = {require('../../assets/images/user.png')}
            style={styles.user}
          />
          <ThemedView style = {styles.userprofile}>
            
            <ThemedText type = 'subtitle' style = {styles.tasktitle}>Hello, ExampleUser</ThemedText>
            <ThemedText type = 'default' style = {styles.taskdesc}>Nice to see you!</ThemedText>
            
          </ThemedView>
        </ThemedView>
        <ThemedView style = {styles.tasktime}>
          
          
        
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Settings</ThemedText>
        
      </ThemedView>
      <TouchableOpacity>
      <ThemedView style={styles.stepContainer}>
        
        <Collapsible title = {<ThemedText type = 'subtitle'>Personal Information</ThemedText>} >
          
          <ThemedView style = {styles.lefthandstep}>
          
          <ThemedText style = {styles.alertdesc}>
            <ThemedText type="default">Review personal information{"\n"}{"\n"}</ThemedText>
            
            <ThemedText type = 'subtitle'>Name:{"\n"}</ThemedText>
                <ThemedText type = 'default'>Pearce Packman{"\n"}{"\n"}</ThemedText>
                <ThemedText type = 'subtitle'style = {styles.alertdesc}>Whatever:{"\n"}</ThemedText>
                <ThemedText type = 'default'>Actual info{"\n"}{"\n"}</ThemedText>
                <ThemedText type = 'subtitle'>Info:{"\n"}</ThemedText>
                <ThemedText type = 'default'>Actual info{"\n"}{"\n"}</ThemedText>
                <ThemedText type = 'subtitle'>Info:{"\n"}</ThemedText>
                <ThemedText type = 'default'>Actual info</ThemedText>
          
          </ThemedText>
        
        </ThemedView>
        </Collapsible>
        <ThemedView style ={styles.checkBoxCont}>
        <Image
            source = {require('../../assets/images/user.png')}
            style={styles.checkMark}
          />
          
        </ThemedView>
        
      </ThemedView>
      </TouchableOpacity>
      <TouchableOpacity>
      </TouchableOpacity>
      
      
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  
  test: {
    backgroundColor: "#e5e8e3"
  },
  moneycontainer: {
    backgroundColor: "#52796f",
    height: 100,
    width: '95%',
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '2%',
    marginTop: '2%',
    flexDirection: 'row',
    borderRadius: 20,
    
    alignItems: 'center',
    textAlign: 'center',
    
  },
  tasktext: {
    textAlign: 'center',
    //backgroundColor: '#cad2c5',
    width: '100%',
    marginTop: 'auto',
    marginBottom: 'auto',
    //backgroundColor: 'orange',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    
    

  },
  tasktitle:{
    textAlign: 'left',
    color: "#d5d9d2",
    flexWrap: 'wrap',
  },
  taskdesc: {
    textAlign: 'left',
    width: '100%',
    color: "#d5d9d2",
    flexWrap: 'wrap',
    
  },
  tasktime: {
    marginBottom: '2%',
  },
  tasktimedesc: {
    
    marginBottom: 0,
    textAlign: 'center'
  },
  tasktimeleft: {
    textAlign: 'center'
  },
  plus: {
    height: 60,
    width: 60,
    tintColor: '#383b38',
    backgroundColor:"#d5d9d2",
    marginBottom: '2%',
    
  },
  addgoalbutton: {
    
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 40,
    borderRadius: 30,
    backgroundColor:"#2f3e46",
    marginBottom: '2%',
  },
  addgoal: {
    
    color: "#d5d9d2",
    justifyContent: 'center',
    

  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#2f3e46',
    borderRadius: 20,
    padding: 10,
    height: 350,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 0,
    textAlign: 'center',
    color: "#d5d9d2",
  },
  stepContainer: {
    
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 12,
    paddingTop: 10,
    paddingBottom: 10,

    minHeight: 70,
    maxHeight: 'auto',
    backgroundColor: '#cad2c5',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  checkBox: {
    height: 30,
    width: 30,
    backgroundColor: '#1a2226',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 'auto',
    opacity: 0.3,
    //position: 'absolute',
    marginTop: 'auto',
    borderColor: '#383b38',
    borderWidth: 1,
    left: 0,   
  },
  checkBoxCont: {
    position: 'relative',
    //backgroundColor: 'blue',
    marginLeft: 'auto',
    height: 50,
    width: 50,
    display: 'flex',

  },
  checkMark: {
    position: 'absolute',
    top: 7,
    left: 8,
    height: 35,
    width: 35,
    //backgroundColor: 'orange',
    tintColor: '#383b38'
    
  },
  titleContainer: {
    
    flexDirection: 'row',
    alignItems: 'center',
    
    gap: 8,
    //backgroundColor: '#354f52',
    height: 'auto',
    borderBottomWidth: 1,
    borderBottomColor: '#cad2c5',
    marginBottom: 15,
    marginLeft: 8,
    marginRight: 8,
    
  },
  lefthandstep: {
    //backgroundColor: "#84a98c",
    width: 250,
    display: 'flex',
    
  },
  alertdesc: {
    //backgroundColor: 'orange',
    marginLeft: 20,
  },
  popupdesc: {
    //backgroundColor: 'orange',
    marginLeft: 20,
    color: "#c1c4be",
  },
  inputbox: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    paddingLeft: 10,
    marginTop: 10,
    borderRadius: 20,
    fontSize: 18,
    color: "#d5d9d2",
  },
  goalform: {
    //backgroundColor: 'purple',
    width: '90%',
    height: '90%',
    display: 'flex',
    gap: 10,
    alignContent: 'center',
    
  },
  formbutton: {
   
    backgroundColor: '#84a98c',
    textAlign: 'center',
    color: "#d5d9d2",
    borderRadius: 30,
    width: 160,
    height: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 0,
  },
  user: {
    height: 70,
    width: 70,
    backgroundColor: '#1a2226',
    marginLeft: 5,
    marginRight: 'auto',
    marginBottom: 'auto',
    
    //position: 'absolute',
    marginTop: 'auto',
    //borderColor: '#383b38',
    //borderWidth: 1,
    borderRadius: 40,
    tintColor: '#383b38',
  },
  userprofile: {
    //backgroundColor: 'purple',
    width: '76%',
    marginLeft: 'auto',
  },
  toppopup: {
    //backgroundColor: 'orange',
    width: '97%',
  },
  closetab: {
    height: 20,
    width: 20,
  },
});
