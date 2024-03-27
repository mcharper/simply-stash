import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';

const PlaceholderImage = require('../assets/box.jpg');

export function Put({ navigation }) {

  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontSize: 36, backgroundColor: '#841584', color: 'white', width: '100%', textAlign: 'center' }}>Put a Containerinto Storage</Text>
      <Image source={PlaceholderImage} style={styles.image} />

      <Button
        title="Put"
        onPress={() => navigation.navigate('Home')}
      />
    </View >
  );
}

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    width: '100%',
    height: '60%',
  }
});