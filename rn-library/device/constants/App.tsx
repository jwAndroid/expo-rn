import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// console.log(Constants.manifest?.version);

const App = () => {
  const { manifest } = Constants;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text>Version : </Text>
      <Text>{manifest?.version}</Text>
    </View>
  );
};

export default memo(App);
