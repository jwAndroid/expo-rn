import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
// import AlbumButton from './src/components/AlbumButton';
import MCamera from './src/components/MCamera';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <MCamera />

      {/* <AlbumButton name="jw interface button" /> */}
    </View>
  );
};

export default memo(App);
