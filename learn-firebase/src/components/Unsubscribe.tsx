import { memo, useCallback, useEffect, useState } from 'react';
import { FlatList, ListRenderItem, Text, View } from 'react-native';
import {
  collection,
  doc,
  limit,
  onSnapshot,
  query,
  setDoc,
} from 'firebase/firestore';

import { db } from '../api/config';
import { TodoType } from '../../type';

const Unsubscribe = () => {
  const [data, setData] = useState<TodoType[]>([]);

  useEffect(() => {
    const original = query(collection(db, 'user', '2', 'todo'));

    onSnapshot(original, (snapshot) => {
      if (snapshot) {
        const chunk = snapshot.docs.map((doc) => doc.data(), []);

        setData(chunk as TodoType[]);
      }
    });
  }, []);

  const renderItem = useCallback<ListRenderItem<TodoType>>(({ item }) => {
    return <Text style={{ fontSize: 30 }}>{item.text}</Text>;
  }, []);

  const keyExtractor = useCallback((item) => {
    return item.postId;
  }, []);

  const pushDoc = useCallback(async () => {
    const ref = doc(db, 'user', '2', 'todo', '3');

    const post = {
      postId: 3,
      text: 'asef',
      status: 1,
      createdAt: Date.now(),
      updatedAt: -1,
      isPin: false,
      cursor: 3,
    };

    await setDoc(ref, post);
  }, []);

  const unsubscribe = onSnapshot(collection(db, 'user', '2', 'todo'), () => {
    // Respond to data
    // ...
  });

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />

      <Text onPress={unsubscribe}>리스너 분리</Text>
      <Text onPress={pushDoc} style={{ marginTop: 10 }}>
        pushDoc
      </Text>
    </View>
  );
};

export default memo(Unsubscribe);
