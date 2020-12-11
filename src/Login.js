import React from 'react';
import { View, StyleSheet,Image } from 'react-native';
import LoginButton from './components/LoginButton';
import LoginInput from './components/LoginInput';
import Logo from './components/Logo';

function Login() {
  return (
    <View style={styles.container}>
      <Image/> {/*for test purpose*/}
      <Logo />
        <LoginInput placeholderText='Email or username' inputType='email-address' />
        <LoginInput placeholderText='Password' inputType='visible-password' />
      <LoginButton buttonText='LOG IN' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282828',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default Login;
