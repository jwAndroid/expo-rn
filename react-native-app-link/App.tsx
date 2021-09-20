import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Linking from 'expo-linking';

// https://github.com/FiberJW/react-native-app-link
// https://docs.expo.dev/guides/linking/#linking--module

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// const url = 'exp://ts-psz.jwandroid.11-react-native-app-link.exp.direct';

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

// Linking.getInitialURL()
//   .then((url) => {
//     if (url) {
//       console.log(`Initial Url: ${url}`);
//     }
//   })
//   .catch((err) => console.error('An error occurred', err));

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
};

export default memo(App);
