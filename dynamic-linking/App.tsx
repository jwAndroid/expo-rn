import React, { memo, useCallback } from 'react';
import {
  Linking,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import {
  INSTALL_URL_ANDROID,
  NOT_INSTALL_URL_ANDROID,
  INSTALL_URL_IOS,
  NOT_INSTALL_URL_IOS,
} from './src/link';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appleButton: {
    flex: 1,
    paddingVertical: 3,
    marginHorizontal: 5,
    marginLeft: 10,
    borderRadius: 8,
    backgroundColor: '#0099ff',
  },
  androidButton: {
    flex: 1,
    paddingVertical: 3,
    marginHorizontal: 5,
    marginRight: 10,
    borderRadius: 8,
    backgroundColor: '#22ddb9',
  },
  text: {
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingVertical: 14,
    color: '#fff',
  },
});

const App = () => {
  const onPressIos = useCallback(() => {
    if (Platform.OS === 'ios') {
      handlePress(INSTALL_URL_ANDROID, NOT_INSTALL_URL_ANDROID);
    } else {
      console.log('only ios');
    }
  }, []);

  const onPressAndroid = useCallback(() => {
    if (Platform.OS === 'android') {
      handlePress(INSTALL_URL_IOS, NOT_INSTALL_URL_IOS);
    } else {
      console.log('only android');
    }
  }, []);

  const handlePress = useCallback(async (url: string, replaceUrl: string) => {
    const isInstall = await Linking.canOpenURL(url);
    console.log(`isInstall: ${isInstall}`);

    if (isInstall) {
      await Linking.openURL(url);
    } else {
      await Linking.openURL(replaceUrl);
    }
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Pressable style={styles.appleButton} onPress={onPressIos}>
        <Text style={styles.text}>IOS</Text>
      </Pressable>

      <Pressable style={styles.androidButton} onPress={onPressAndroid}>
        <Text style={styles.text}>ANDROID</Text>
      </Pressable>
    </View>
  );
};

export default memo(App);
