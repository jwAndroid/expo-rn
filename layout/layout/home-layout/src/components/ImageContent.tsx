import React, { memo } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2c0e4e',
    margin: 10,
  },
  textContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    backgroundColor: '#2c0e4e',
    alignItems: 'flex-end',
  },
  text: {
    fontSize: 18,
    color: '#fff',
    marginRight: 30,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginLeft: 25,
  },
});

// interface IImageContent {
//   contents?: string;
// }

const ImageContent = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.circle} source={require('./assets/logo.png')} />

      <View style={styles.textContainer}>
        <Text style={styles.text}>What course would you like</Text>
        <Text style={styles.text}>to take for React Native?</Text>
      </View>
    </View>
  );
};

export default memo(ImageContent);
