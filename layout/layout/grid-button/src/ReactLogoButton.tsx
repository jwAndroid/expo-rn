import React, { memo } from 'react';
import { ImageBackground, Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 10,
          height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
      },
      android: {
        elevation: 20,
      },
    }),
  },
});

const ReactLogoButton = () => {
  return (
    <ImageBackground
      style={styles.item}
      source={require('../assets/img/react.png')}
      imageStyle={{ borderRadius: 16 }}
    />
  );
};

export default memo(ReactLogoButton);
