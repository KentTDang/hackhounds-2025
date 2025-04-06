import {
  CameraMode,
  CameraType,
  CameraView,
  useCameraPermissions,
} from "expo-camera";
import { useRef, useState, useEffect } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import axios from "axios";
import { ThemedText } from '@/components/ThemedText';
import { GetTasks } from "@/app/GetTasks";
import { getDatabase, onValue, ref } from 'firebase/database';
import { FIREBASE_APP } from '../FirebaseConfig';

export default function App() {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);
  const [uri, setUri] = useState<string | null>(null);
  const [facing, setFacing] = useState<CameraType>("back");
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<string>();
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

  if (!permission) {
    return null;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to use the camera
        </Text>
        <Button onPress={requestPermission} title="Grant permission" />
      </View>
    );
  }
  
  const takePicture = async () => {
    console.log("Inside of takePicture")
    setLoading(true);
    try {
      const photo = await cameraRef.current?.takePictureAsync({ base64: true });
      if (photo) {
        setUri(photo?.uri);
        const dataUri = `data:image/jpeg;base64,${photo.base64}`;
        const result = await axios.post("http://10.233.160.99:8080/api/analyze", { 
          image: dataUri
        });
        console.log("Server response:", result.data);
        setResponse(result.data.result);
        console.log("✅ Testing here: ", response);
        if(JSON.stringify(response) == "Yes") {
          // Yes Logic
        } else {
          // No Logic
        }
      }
    } catch(e) {
      console.error("Hit error taking picture and sending to the servers: ", e);
    } finally {
      setLoading(false);
    }
  };

  const toggleFacing = () => {
    setFacing((prev) => (prev === "back" ? "front" : "back"));
  };

  const renderPicture = () => {
    return (
      <View>
        <Image
          source={{ uri }}
          contentFit="contain"
          style={{ width: 500, aspectRatio: 1 }}
        />
        
        <Button onPress={() => setUri(null)} title="Take another picture" />

        <View style = {styles.yesorno}>
          
          <Image
                  source = {require('../assets/images/check.png')}
                  style = {styles.checkMark}
                  
                  
                />
          <Text>Image Verified!</Text>
                
          </View>
          <Text>
            {loading? <>Loading...</> : JSON.stringify(response)}
          </Text>

      </View>
    );
  };

  const renderCamera = () => {
    return (
      <CameraView
        style={styles.camera}
        ref={cameraRef}
        facing={facing}
        mute={false}
        responsiveOrientationWhenOrientationLocked
      >
        
        <View style={styles.filpContainer}>
          <Pressable onPress={toggleFacing}>
            <FontAwesome6 name="rotate-left" size={32} color="white" />
          </Pressable>
        </View>
        

        <View style={styles.shutterContainer}>
          <Pressable onPress={takePicture}>
            {({ pressed }) => (
              <View
                style={[
                  styles.shutterBtn,
                  {
                    opacity: pressed ? 0.5 : 1,
                  },
                ]}
              >
                <View
                  style={[
                    styles.shutterBtnInner,
                    {
                      backgroundColor: "white",
                    },
                  ]}
                />
              </View>
            )}
          </Pressable>
        </View>
      </CameraView>
    );
  };

  return (
    <View style={styles.container}>
      {uri ? renderPicture() : renderCamera()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5e8e3",
    alignItems: "center",
    justifyContent: "center",
  },
  camera: {
    flex: 1,
    width: "100%",
    aspectRatio: 1,
    marginBottom: 80,
  },
  filpContainer: {
    position: "absolute",
    width: "100%",
    alignItems: "flex-end",
    padding: 10,
    
  },
  shutterContainer: {
    position: "absolute",
    bottom: 44,
    left: 0,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  shutterBtn: {
    backgroundColor: "transparent",
    borderWidth: 5,
    borderColor: "white",
    width: 85,
    height: 85,
    borderRadius: 45,
    marginBottom: -30,
    
    alignItems: "center",
    justifyContent: "center",
  },
  shutterBtnInner: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  camtext: {
    color: 'black',
    fontSize: 36,
    fontWeight: 'bold',
    
    textAlign: 'center',
    backgroundColor: 'red',
    height: 30,
  },
  checkMark: {
    
    
    height: 87,
    width: 87,
    //backgroundColor: 'blue',
    tintColor: '#383b38'
    
  },
  yesorno: {
    //backgroundColor: 'orange',
    height: 100,
    
    justifyContent: 'center',
    alignItems: 'center', 
    marginTop: 0,
    alignSelf: 'center',
  }
});
