import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, TextInput, TouchableHighlight } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Formik } from 'formik';
import Ionicons from '@expo/vector-icons/Ionicons';

export function Label({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [showCamera, setShowCamera] = useState(false);

  const onSubmit = data => console.log(data);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontSize: 36, backgroundColor: '#841584', color: 'white', width: '100%', textAlign: 'center' }}>Pack a Container</Text>
      {/* <Image source={PlaceholderImage} style={styles.image} /> */}

      <Formik
        initialValues={{ containerLabel: "" }}
        onSubmit={values => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, setFieldValue }) => {

          const handleBarCodeScanned = ({ type, data }) => {
            setScanned(true);
            setShowCamera(false);
            alert(`Bar code with type ${type} and data ${data} has been scanned!`);
            if (data) {
              setFieldValue("containerLabel", data);
            }
          };

          return (
            <>
              <TextInput
                onChangeText={handleChange('containerLabel')}
                onBlur={handleBlur('containerLabel')}
                value={values.containerLabel}
                style={styles.input}
                placeholder='Container label eg: XXX000'
              />

              <TouchableHighlight onPress={setShowCamera}
                title="Scan barcode"
                accessibilityLabel="Scan"
              >
                <Ionicons name="barcode" size={100} color={"black"} />
              </TouchableHighlight>

              <Button
                title="Next: Put your container into storage"
                onPress={() => navigation.navigate('Put')}
              />

              {
                showCamera &&
                <BarCodeScanner
                  onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                  style={[StyleSheet.absoluteFillObject, styles.barCodeScanner]}
                />
              }

              {/* <Button onPress={handleSubmit} title="Submit" /> */}

            </>
          )
        }}
      </Formik>

      {/* {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />} */}

    </View >
  );
}

const styles = StyleSheet.create({
  input: {
    textAlignVertical: 'top',
    margin: 5,
    width: "70%",
    borderColor: "#841584",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  },
  barCodeScanner: {
    backgroundColor: "black"
  },
  camera: {
    height: "20%",
    width: "70%"
  }
});