import { memo, useCallback, useEffect, useState } from 'react';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';

import { giftedSampleData } from './sample/sampledata';

const ChatBasic = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    setMessages(giftedSampleData);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((prev) => GiftedChat.append(prev, messages));
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
};

export default memo(ChatBasic);
