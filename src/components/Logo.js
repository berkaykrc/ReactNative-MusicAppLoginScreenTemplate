import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
function Logo() {
  return (
    <View style={styles.imageContainer}>
      <Image source={require('../assets/logo.png')} style={styles.imageStyles} />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: 150,
    height: 150,
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom:50,
  },
  imageStyles: {
    width: 150,
    height: 150,
  },
});

export default Logo;