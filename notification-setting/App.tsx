import React, { useCallback } from 'react';
import styled from '@emotion/native';
import { StatusBar } from 'expo-status-bar';
import * as Linking from 'expo-linking';
import * as Notifications from 'expo-notifications';

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

const RequsetPermission = styled.Text({
  fontSize: 16,
  color: '#303030',
  marginTop: 30,
});

const GetPermission = styled.Text({
  fontSize: 16,
  color: '#303030',
  marginTop: 30,
});

export default function App() {
  const accecsSetting = useCallback(() => {
    Linking.openSettings();
  }, []);

  const getPermission = useCallback(async () => {
    const getPermission = await Notifications.getPermissionsAsync();
    console.log(getPermission);
  }, []);

  const requesPermission = useCallback(async () => {
    const requesPermission = await Notifications.requestPermissionsAsync();
    console.log(requesPermission);
  }, []);

  return (
    <Container>
      <StatusBar style="auto" />
      <AccecsSetting onPress={accecsSetting}>Accecs Setting</AccecsSetting>
      <RequsetPermission onPress={requesPermission}>
        Requset Permission
      </RequsetPermission>
      <GetPermission onPress={getPermission}>Get Permission</GetPermission>
    </Container>
  );
}
