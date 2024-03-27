import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export function Store({ navigation }) {

  return (
    <View style={{ alignItems: 'center' }}>
      <Text>Store</Text>

      <Button
        title="Pack"
        onPress={() => navigation.navigate('Label')}
      />

      <Button
        title="Label"
        onPress={() => navigation.navigate('Pack')}
      />

    </View >
  );
}
