import { memo, useCallback, useEffect, useState } from 'react';
import { FlatList, ListRenderItem, Text } from 'react-native';

import {
  collection,
  DocumentData,
  limit,
  onSnapshot,
  orderBy,
  query,
  QueryDocumentSnapshot,
  startAfter,
} from 'firebase/firestore';

import { TodoType } from '../../type';
import { db } from '../api/config';
import { Container } from '../style/MyStyle';

const Pagination = () => {
  const [data, setData] = useState<TodoType[]>([]);
  const [lastDoc, setLastDoc] = useState<QueryDocumentSnapshot<DocumentData>>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const original = query(
      collection(db, 'user', '1', 'todo'),
      orderBy('createdAt', 'asc'),
      limit(20)
    );

    onSnapshot(original, (snapshot) => {
      if (snapshot) {
        const chunk = snapshot.docs.map((doc) => doc.data(), []);

        setIsLoading(false);

        setLastDoc(snapshot.docs[snapshot.docs.length - 1]);

        setData(chunk as TodoType[]);
      }
    });
  }, []);

  const onLoadMore = useCallback(() => {
    if (!!lastDoc) {
      setIsLoading(true);

      const next = query(
        collection(db, 'user', '1', 'todo'),
        orderBy('createdAt', 'asc'),
        startAfter(lastDoc),
        limit(20)
      );

      // const querySnapshot = await getDocs(ref);

      onSnapshot(next, (snapshot) => {
        if (snapshot) {
          const chunk = snapshot.docs.map((doc) => doc.data(), []);

          setIsLoading(false);

          setLastDoc(snapshot.docs[snapshot.docs.length - 1]);

          setData([...data, ...(chunk as TodoType[])]);
        }
      });
    }
  }, [data, lastDoc]);

  const renderItem = useCallback<ListRenderItem<TodoType>>(({ item }) => {
    return <Text style={{ fontSize: 30 }}>{item.text}</Text>;
  }, []);

  const keyExtractor = useCallback((item) => {
    return item.postId;
  }, []);

  return (
    <Container>
      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        onEndReached={onLoadMore}
        onEndReachedThreshold={0.5}
        renderItem={renderItem}
      />

      {isLoading && (
        <Text style={{ fontSize: 30, color: 'blue', fontWeight: 'bold' }}>
          Loading...
        </Text>
      )}

      {!lastDoc && (
        <Text style={{ fontSize: 30, color: 'blue', fontWeight: 'bold' }}>
          No More Data...
        </Text>
      )}
    </Container>
  );
};

export default memo(Pagination);
