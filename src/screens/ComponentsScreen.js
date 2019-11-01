// part1
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

// part2
const ComponentsScreen = () => {
  
  return <View>
    <Text style={styles.textStyle}>This is the componens screen</Text>
    <Text>Hi there</Text>
  </View>;
};

// part3
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

// part4
export default ComponentsScreen;
