import React, { memo, useCallback, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Notifications from 'expo-notifications';
import * as Linking from 'expo-linking';
import styled from '@emotion/native';

const Container = styled.View({
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
});

const AccecsSetting = styled.Text({
  fontSize: 16,
  color: '#303030',
  marginTop: 30,
});

const App = () => {
  useEffect(() => {
    (async () => {
      const result = await Notifications.getPermissionsAsync();

      console.log(result);
    })();
  }, []);

  const accecsSetting = useCallback(() => {
    Linking.openSettings();
  }, []);

  return (
    <Container>
      <StatusBar style="auto" />

      <AccecsSetting onPress={accecsSetting}>Accecs Setting</AccecsSetting>
    </Container>
  );
};

export default memo(App);
