import React, { } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const PlaceholderImage = require('../assets/box.jpg');

export function Home({ navigation }) {

  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={styles.header}>Pack your stuff</Text>

      <Text style={styles.body}>Lorem ipsum</Text>
    </View >
  );
}

const styles = StyleSheet.create({
  header: {
    alignSelf: "flex-start",
    fontSize: 24,
    padding: 20
  },
  body: {
    alignSelf: "flex-start",
    fontSize: 14,
    paddingLeft: 20
  },
  image: {
    alignSelf: 'flex-start',
    width: '40%',
    height: '40%'
  }
});