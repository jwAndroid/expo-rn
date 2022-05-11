import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { memo, useCallback, useState } from 'react';
import { Text } from 'react-native';

import { GiftedChat } from 'react-native-gifted-chat';
import { RoomScreenNavigationProp } from '../ProfileStack';

const Container = styled.View({
  flex: 1,
  marginTop: 50,
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

const Room = () => {
  const navigation = useNavigation<RoomScreenNavigationProp>();

  const [messages, setMessages] = useState<IMessage[]>([
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
  ]);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Container>
      <Text onPress={onBack}>뒤로가기</Text>

      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </Container>
  );
};

export default memo(Room);
