import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData
} from 'react-native';

export default function App() {
  const [name, setName] = useState('Jason');
  const [counter, setCounter] = useState(1)
  const handleClick = () => {
    if (counter == 0) {
      setName('Jason');
      setCounter(1);
    } else {
      setName('Bailey');
      setCounter(0);
    }
  }

  // const handleInput = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
  //   const value = e.nativeEvent.text;
  //   setName(value)
  // }


  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Change Name!"
          onPress={handleClick}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Bailey Alert"
          color="#841584"
          onPress={() => { Alert.alert('Bailey is pretty.') }}
        />
      </View>
      <Text style={styles.inputTitle} >Enter name: </Text>
      <TextInput
        style={styles.input}
        // onChange={handleInput}
        onChangeText={(e) => setName(e)}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    marginTop: 20
  },
  inputTitle: {
    marginTop: 25
  },
  input: {
    width: 150,
    borderColor: 'black',
    borderWidth: 1,
    padding: 8
  }
});
