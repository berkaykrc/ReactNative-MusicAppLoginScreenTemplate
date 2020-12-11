import React from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';
function LoginInput(props) {
  return (
    <View style={styles.textContainer}>
      <View>
        <TextInput
          placeholderTextColor='black'
          secureTextEntry={true}
          placeholder={props.placeholderText}
          keyboardType={props.inputType} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    width: 350,
    backgroundColor: '#eceff1',
    height: 50,
    padding: 20,
    borderRadius: 5,
    marginBottom: 20,
    justifyContent: 'center',
  },
  textContainer: {
    width:350,
    backgroundColor: 'gray',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    padding: 5,
    borderRadius: 10,
    margin: 10,
  }
})
export default LoginInput;
