import React, { useCallback } from 'react';
import styled from '@emotion/native';
import { Platform, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Linking from 'expo-linking';
import Constants from 'expo-constants';
import * as IntentLauncher from 'expo-intent-launcher';

// https://github.com/expo/expo/blob/master/packages/expo-intent-launcher/src/IntentLauncher.ts

const Container = styled.View({
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
});

const pkg = Constants.manifes?.releaseChannel
  ? Constants.manifest?.android?.package
  : 'host.exp.exponent';

export default function App() {
  const accecsSetting = useCallback(() => {
    // Linking.openSettings();

    if (Platform.OS === 'ios') {
      Linking.openURL('app-settings://notification/expo');
    } else {
      // IntentLauncher.startActivityAsync(
      //   IntentLauncher.ACTION_APP_NOTIFICATION_SETTINGS
      // );

      IntentLauncher.startActivityAsync(
        IntentLauncher.ACTION_APP_NOTIFICATION_SETTINGS,
        {
          data: 'package:' + pkg,
        }
      );
    }
  }, []);

  return (
    <Container>
      <StatusBar style="auto" />
      <Text onPress={accecsSetting} style={{ fontSize: 16 }}>
        go
      </Text>
    </Container>
  );
}
