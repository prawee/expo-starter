// part1
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

// part2
const ComponentsScreen = () => {
  const name = 'Prawee';
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native! </Text>
      <Text style={styles.subHeaderStyle}>My name is {name}</Text>
    </View>
  );
};

// part3
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  subHeaderStyle: {
    fontSize: 20
  }
});

// part4
export default ComponentsScreen;
