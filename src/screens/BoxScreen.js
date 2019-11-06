import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    //alignItems: 'flex-end', //stretch(default) | flex-start | center | flex-end
    //flexDirection: 'row', // column(default) | row
    height: 200,
    //justifyContent: 'space-between', // flex-start | center | flex-end | space-between | space-around
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: 'red',
    //marginVertical: 20,
    //marginHorizontal: 20,
    //margin: 20,
    //flex: 4
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: 'blue',
    //flex: 4
    //alignSelf: 'stretch',
    fontSize: 18,
    // position: 'absolute',
    // top: 0,
    // right: 0,
    // bottom: 0,
    // left: 0
    ...StyleSheet.absoluteFillObject
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: 'red',
    //flex: 2
  }
});

export default BoxScreen;
