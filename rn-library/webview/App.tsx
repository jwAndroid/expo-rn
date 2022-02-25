import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import WebView from 'react-native-webview';

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

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <WebView
        startInLoadingState
        javaScriptEnabled
        source={{
          uri: 'https://docs.expo.dev/guides/linking/?redirected#in-a-standalone-app',
        }}
      />
    </View>
  );
};

export default memo(App);
