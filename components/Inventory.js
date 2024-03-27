import { Text, View, StyleSheet, FlatList, Image, Button } from 'react-native';
import React, { useState, useEffect } from 'react';

export function Inventory({ navigation }) {
  const data = [{ title: "Test 1" }, { title: "Test 2" }];

  return (
    <View style={styles.container}>

      <Button
        title="Label"
        onPress={() => navigation.navigate('Label')}
      />

      <FlatList
        data={data}
        renderItem={({ item }) => <Text key={item.title} style={styles.listItem}>{item.title}</Text>}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '100px',
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center'
  },


  listItem: {
    lineHeight: 50,
    borderWidth: 1,
    borderBottomWidth: 2
  },

});