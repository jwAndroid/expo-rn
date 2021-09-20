import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Device from 'expo-device';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

console.log({ Device });

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text>Device Info</Text>
    </View>
  );
};

export default memo(App);
