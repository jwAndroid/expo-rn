import React, { memo, useState, useCallback, useEffect } from 'react';
import styled from '@emotion/native';
import { GiftedChat } from 'react-native-gifted-chat';

const Container = styled.View({
  flex: 1,
});

interface IUser {
  _id: number;
  name: string;
  avatar: string;
}

interface IMessage {
  _id: number;
  text: string;
  createdAt: Date;
  user: IUser;
  received?: boolean;
}

const App = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: '지웅',
          avatar: 'https://placeimg.com/140/140/any',
        },
        received: true,
      },
      {
        _id: 2,
        text: 'Hello developer13124',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: '지웅',
          avatar: 'https://placeimg.com/140/140/any',
        },
        received: true,
      },
      {
        _id: 3,
        text: 'Hello developer2',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: '지웅',
          avatar: 'https://placeimg.com/140/140/any',
        },
        received: true,
      },
      {
        _id: 4,
        text: 'Hello developer2',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: '지웅',
          avatar: 'https://placeimg.com/140/140/any',
        },
        received: true,
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <Container>
      <GiftedChat
        renderAvatarOnTop
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </Container>
  );
};

export default memo(App);
