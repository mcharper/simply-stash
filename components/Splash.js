import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export function Splash({ navigation }) {

  return (
    <View style={{ alignItems: 'center' }}>
      <Text>Splash</Text>

      <Button
        title="Get Started"
        onPress={() => navigation.navigate('Pack')}
      />

    </View >
  );
}
