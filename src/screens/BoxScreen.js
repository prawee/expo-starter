import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      {/* <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text> */}
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoParent}>
        <View style={styles.viewTwoStyle} />
      </View>
      <View style={styles.viewThreeStyle} />
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
  },
  parentStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewOneStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'red'
  },
  viewTwoStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'green'
  },
  viewTwoParent: {
    height: 100,
    justifyContent: 'flex-end'
  },
  viewThreeStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'purple'
  }
});

export default BoxScreen;
