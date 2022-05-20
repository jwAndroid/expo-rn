import React, { memo, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Linking from 'expo-linking';
import { StatusBar } from 'expo-status-bar';

// https://docs.expo.dev/guides/linking/#linking--module

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// const getUrl = async () => {
//   const initialUrl = await Linking.getInitialURL();
//   console.log(initialUrl);
// };

// const openUrl = async (cangoUrl: string) => {
//   const supported = await Linking.canOpenURL(cangoUrl);
//   console.log(supported);

//   if (supported) {
//     console.log(cangoUrl);
//     await Linking.openURL(cangoUrl);
//   }
// };

// getUrl();
// Linking.makeUrl();

// openUrl(url);

const App = () => {
  const go = useCallback(() => {
    Linking.openURL('wetrip://');
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text onPress={go}>GO</Text>
    </View>
  );
};

export default memo(App);
