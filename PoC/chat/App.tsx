import { memo, useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { Platform } from 'react-native';
import * as Notifications from 'expo-notifications';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import styled from '@emotion/native';
import {
  addDoc,
  collection,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';

import { db } from './src/config';

const Container = styled.View({
  flex: 1,
  marginTop: 30,
});

const Header = styled.View({
  width: '100%',
  height: 60,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'gray',
});

const StyledText = styled.Text({
  fontSize: 20,
  color: '#fff',
  fontWeight: 'bold',
});

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const App = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    (async () => {
      const { status } = await Notifications.getPermissionsAsync();
      console.log(status);

      if (status === 'denied') {
        await Notifications.requestPermissionsAsync();
      }

      const { data } = await Notifications.getExpoPushTokenAsync();

      console.log(data);
    })();
  }, []);

  useEffect(() => {
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
      });
    }
  }, []);

  useLayoutEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, 'chats'), orderBy('createdAt', 'desc')),
      (snopshot) => {
        const document: DocumentData[] = [];

        snopshot.forEach((doc) => {
          document.push(doc.data());
        });

        setMessages(document as IMessage[]);
      }
    );

    return () => unsubscribe();
  }, []);

  const onSend = useCallback((messages) => {
    setMessages((prev) => GiftedChat.append(prev, messages));

    const { _id, createdAt, text, user } = messages[0];

    addDoc(collection(db, 'chats'), { _id, createdAt, text, user });
  }, []);

  const sendNotification = useCallback(async () => {
    const message = {
      to: 'ExponentPushToken[AU5Pg_MG_u5nieix5XWq1r]', // for me
      sound: 'default',
      title: 'hi ios',
      body: 'And here is the body!',
      data: { someData: 'goes here' },
    };

    await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
  }, []);

  return (
    <Container>
      <Header>
        <StyledText onPress={sendNotification}>send notification</StyledText>
      </Header>

      <GiftedChat
        alignTop
        messages={messages}
        alwaysShowSend
        keyboardShouldPersistTaps="handled"
        onSend={(messages) => onSend(messages)}
        user={{ _id: 1 }}
      />
    </Container>
  );
};

export default memo(App);
