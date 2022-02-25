import React, { memo, useEffect, useMemo, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import { Notification } from 'expo-notifications';
import styled from '@emotion/native';
import { Platform } from 'react-native';

const Container = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fff',
});

const StyledText = styled.Text({
  fontSize: 16,
  color: '#111',
  fontWeight: 'bold',
  marginTop: 10,
});

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    };
  },
});

const App = () => {
  const [token, setToken] = useState('');
  const [notification, setNotification] = useState<Notification>();

  const title = useMemo(() => {
    return notification?.request.content.title;
  }, [notification?.request.content.title]);

  const body = useMemo(() => {
    return notification?.request.content.body;
  }, [notification?.request.content.body]);

  useEffect(() => {
    (async () => {
      if (Constants.isDevice) {
        const { status } = await Notifications.getPermissionsAsync();

        if (status !== 'granted') {
          await Notifications.requestPermissionsAsync();
        }

        const { data } = await Notifications.getExpoPushTokenAsync();

        console.log(data);
        setToken(data);
      }

      if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.MAX,
        });
      }
    })();
  }, []);

  useEffect(() => {
    Notifications.addNotificationReceivedListener((notification) => {
      setNotification(notification);
    });

    Notifications.addNotificationResponseReceivedListener((response) => {
      console.log(response);
    });
  }, []);

  return (
    <Container>
      <StatusBar style="auto" />

      <StyledText>{`Token: ${token}`}</StyledText>

      <StyledText>{`Title: ${title}`}</StyledText>

      <StyledText>{`Body: ${body}`}</StyledText>
    </Container>
  );
};

export default memo(App);
