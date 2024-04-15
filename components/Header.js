import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { colourScheme } from '../styles/styles.js';

export const Header = () => {
  return (
    <View style={styles.header}>
      <Ionicons name="arrow-back" size={30} color={colourScheme.text} />
      <Image source={require('../assets/AppLogo.png')} />
      <Ionicons name="person-circle" size={30} color={colourScheme.text} />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 45,
    paddingBottom: 6
  }
});