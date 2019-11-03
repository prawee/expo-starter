import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
  // state === { count: number }
  // action === { type: 'increment' || 'decrement', payload: 1 }
  switch(action.type) {
    case 'increment':
      return {...state, count: state.count + action.payload };
    case 'decrement':
      return state.count <= 0 ? state : {...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  //let counter = 0;
  //const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <View>
      <Button 
        title="Increase" 
        onPress={() => {
          //counter++;
          //console.log(counter);
          //setCounter(counter+1);
          dispatch({ type: 'increment', payload: 1 })
        }} />
      <Button 
        title="Decrease" 
        onPress={() => {
          //∂counter--;
          //console.log(counter);
          //setCounter(counter-1);
          dispatch({ type: 'decrement', payload: 1 })
        }} />
      <Text>Current Count: {state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
