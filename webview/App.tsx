import React, { memo } from 'react';
import { Linking, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import WebView from 'react-native-webview';
import { uri } from './src/uri';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
  },
  font: {
    color: '#fff',
    fontSize: 24,
  },
});

Linking.getInitialURL()
  .then((url) => {
    if (url) {
      // Linking.openURL(url);
      console.log(url);
    }
  })
  .catch((err) => console.error('An error occurred', err));

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <WebView
        // onMessage={(e) => {
        //   const getData = JSON.parse(e.nativeEvent.data);
        //   console.log({ getData });
        // }}
        startInLoadingState
        javaScriptEnabled
        source={{ uri }}
      />

      <Text style={styles.font}>url</Text>
    </View>
  );
};

export default memo(App);
