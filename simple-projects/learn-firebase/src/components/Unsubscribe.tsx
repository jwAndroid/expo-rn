import { memo, useCallback, useState } from 'react';
import { FlatList, ListRenderItem, Text, View } from 'react-native';
import { collection, onSnapshot, query } from 'firebase/firestore';

import { db } from '../api/config';
import { TodoType } from '../../type';

const Unsubscribe = () => {
  const [data, setData] = useState<TodoType[]>([]);

  const renderItem = useCallback<ListRenderItem<TodoType>>(({ item }) => {
    return <Text style={{ fontSize: 30 }}>{item.text}</Text>;
  }, []);

  const keyExtractor = useCallback((item) => {
    return item.postId;
  }, []);

  const getData = useCallback(() => {
    onSnapshot(query(collection(db, 'user', '2', 'todo')), (snapshot) => {
      if (snapshot) {
        const chunk = snapshot.docs.map((doc) => doc.data(), []);

        setData(chunk as TodoType[]);
      }
    });
  }, []);

  const detech = useCallback(() => {
    console.log('de');

    const unsubscribe = onSnapshot(
      query(collection(db, 'user', '2', 'todo')),
      () => {}
    );

    unsubscribe();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />

      <Text onPress={getData}>getData</Text>
      <Text onPress={detech} style={{ marginTop: 10 }}>
        detech
      </Text>
    </View>
  );
};

export default memo(Unsubscribe);
