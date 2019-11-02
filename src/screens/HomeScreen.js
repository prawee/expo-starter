import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return <View>
    <Text style={styles.text}>Hi there!</Text>
    <Button 
      onPress={() => console.log('button pressd!')}
      title="Go to Components Demo" />
    <TouchableOpacity
      onPress={() => console.log('list pressed')}
    >
      <Text>Go to List Demo</Text>
      <Text>Go to List Demo</Text>
      <Text>Go to List Demo</Text>
    </TouchableOpacity>
  </View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
