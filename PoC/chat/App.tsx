import { memo, useCallback, useLayoutEffect, useState } from 'react';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import {
  addDoc,
  collection,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';

import { db } from './src/config';

const App = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);

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

  return (
    <GiftedChat
      alignTop
      messages={messages}
      alwaysShowSend
      keyboardShouldPersistTaps="handled"
      onSend={(messages) => onSend(messages)}
      user={{ _id: 1 }}
    />
  );
};

export default memo(App);
