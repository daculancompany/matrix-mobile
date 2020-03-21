import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => (
  <Image source={require('../assets/logo-image.png')} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 50,
    marginBottom: 12,
  },
});

export default memo(Logo);
