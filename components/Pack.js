import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, TouchableHighlight, ImageBackground } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';
import { Formik, setIn } from 'formik';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ref } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
// import { FIRESTORE_STORAGE, FIRESTORE_DB } from "../firebaseConfig.js";

export function Pack({ navigation }) {
  const [scanned, setScanned] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null)
  const [info, setInfo] = useState("");

  let camera = null;

  // const testRef = ref(FIRESTORE_STORAGE, 'pexels-karolina-grabowska-4498135.jpg');
  // if (testRef.fullPath != info) {
  //   setInfo(testRef.fullPath);
  // }

  takePic = async () => {
    console.log("Taking pic");
    let photo = await camera.takePictureAsync();
    setCapturedImage(photo);
    console.log("Going to add to firestore");
    try {
      // console.log("Adding to firestore");
      // const obj = { id: "10249012", name: "Thing" };
      // // Why does this seem to have no effect?
      // const db = await addDoc(collection(FIRESTORE_DB, "storage", "items", "images"), obj);
      // console.log("Added it");
    }
    catch (e) {
      console.log("Couldnt add to firestore");
      console.log(e);
    }
  }

  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontSize: 36, backgroundColor: '#841584', color: 'white', width: '100%', textAlign: 'center' }}>Pack a Container</Text>

      <Formik
        initialValues={{ email: '' }}
        onSubmit={values => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              style={styles.input}
              multiline={true}
              numberOfLines={10}
              placeholder='Whats in it?'
            />

            {
              scanned && scanned.data && <Text>Bar code scanned: {scanned.data}</Text>
            }

            <Camera type={"back"} style={styles.camera} ref={(r) => { camera = r; }} onBarCodeScanned={setScanned}>
              <View>
              </View>
            </Camera>

            <Button title={'Take pic'} onPress={takePic} />

            <View>
              <ImageBackground
                source={{ uri: capturedImage && capturedImage.uri }}
                style={{
                  height: 200,
                  width: 300
                }}
              />

            </View>

            <Text>{info}</Text>
            <Button
              title="Next: Label your container"
              onPress={() => navigation.navigate('Label')}
            />
          </>
        )}
      </Formik>
    </View >
  );
}

const styles = StyleSheet.create({
  input: {
    textAlignVertical: 'top',
    margin: 5,
    width: "70%",
    height: 100,
    borderColor: "#841584",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  },
  camera: {
    height: "20%",
    width: "70%"
  }
});