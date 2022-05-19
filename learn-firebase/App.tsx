import { memo, useCallback, useLayoutEffect, useState } from 'react';
import { FlatList, ListRenderItem, RefreshControl } from 'react-native';
import {
  collection,
  doc,
  endAt,
  orderBy,
  query,
  setDoc,
  startAt,
  updateDoc,
} from 'firebase/firestore';
import uuid from 'react-native-uuid';
import 'moment/locale/ko';

import { db } from './src/api/config';
import { TodoType } from './type';
import { onDataSnapshot } from './src/api/firebase';
import { original, todoRef } from './src/api/ref';
import {
  Container,
  ItemContainer,
  StyledInput,
  StyledText,
} from './src/style/MyStyle';
import Pagination from './src/components/Pagination';
import Unsubscribe from './src/components/Unsubscribe';
import Doc from './src/components/Doc';

const userId = '1';

const App = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [value, setValue] = useState('');

  const [pageCursor, setPageCursor] = useState(11);
  const [qu, setQu] = useState(0);

  const [isRefreshing, setIsRefreshing] = useState(false);

  useLayoutEffect(() => {
    onDataSnapshot(todoRef, (documents: TodoType[]) => {
      if (documents.length > 0) {
        const process = documents.filter(
          (document) => document.status === 1,
          []
        );

        console.log('todoRef onDataSnapshot');
        setTodos([...process]);
      }
    });
  }, []);

  useLayoutEffect(() => {
    onDataSnapshot(original, (documents: TodoType[]) => {
      console.log('setQu(documents.length);');
      setQu(documents.length);
    });
  }, []);

  const onEndReached = useCallback(() => {
    if (pageCursor <= qu) {
      const q = query(
        collection(db, 'user', '1', 'todo'),
        orderBy('cursor'),
        startAt(pageCursor),
        endAt(pageCursor + 9)
      );

      // cousor 10 => 11 ... n => n+1 넘어갈때 loadmore 호출 x 하는 버그

      onDataSnapshot(q, (documents: TodoType[]) => {
        console.log(`페이지커서 ${pageCursor}`);
        console.log(`전체 사이즈 ${qu}`);
        console.log(`debug ${pageCursor <= qu && documents.length > 0}`);

        if (documents.length > 0) {
          const process = documents.filter(
            (document) => document.status === 1,
            []
          );

          console.log('onEndReached onDataSnapshot');

          const result = process.sort((a: TodoType, b: TodoType): number => {
            return a.createdAt - b.createdAt;
          });

          setTodos([...todos, ...result]);
        }
      });

      setPageCursor((prev) => prev + 10);
    }
  }, [todos, pageCursor, qu]);

  const keyExtractor = useCallback((item: TodoType) => `${item.postId}`, []);

  const onChangeText = useCallback((text: string) => {
    setValue(text);
  }, []);

  const onSubmitEditing = useCallback(async () => {
    if (value.length > 0) {
      const id = String(uuid.v4());

      const ref = doc(db, 'user', userId, 'todo', id);

      const post = {
        postId: id,
        text: value,
        status: 1,
        createdAt: Date.now(),
        updatedAt: -1,
        isPin: false,
        cursor: qu + 1,
      };

      await setDoc(ref, post);

      setValue('');
    }
  }, [value, qu]);

  const onDelete = useCallback(
    (item: TodoType) => async () => {
      const ref = doc(db, 'user', userId, 'todo', String(item.postId));

      await updateDoc(ref, {
        text: '',
        status: -1,
        updatedAt: -1,
      });
    },
    []
  );

  const onUpdate = useCallback(
    (item: TodoType) => async () => {
      const ref = doc(db, 'user', userId, 'todo', String(item.postId));

      const updatedPost = {
        text: '수정완료',
        status: 1,
        updatedAt: Date.now(),
      };

      await updateDoc(ref, updatedPost);
    },
    []
  );

  const onPin = useCallback(
    (item: TodoType) => async () => {
      const ref = doc(db, 'user', userId, 'todo', String(item.postId));

      const updatedPost = {
        isPin: true,
      };

      await updateDoc(ref, updatedPost);
    },
    []
  );

  const renderItem = useCallback<ListRenderItem<TodoType>>(
    ({ item }) => {
      return (
        <ItemContainer>
          <StyledText>content:{item.text}</StyledText>

          <StyledText onPress={onPin(item)}>핀</StyledText>

          <StyledText onPress={onUpdate(item)}>수정</StyledText>

          <StyledText onPress={onDelete(item)}>삭제</StyledText>
        </ItemContainer>
      );
    },
    [onPin, onUpdate, onDelete]
  );

  const onRefresh = useCallback(() => {
    setIsRefreshing(true);
    onDataSnapshot(todoRef, (documents: TodoType[]) => {
      if (documents.length > 0) {
        const process = documents.filter(
          (document) => document.status === 1,
          []
        );

        console.log('onRefresh onDataSnapshot');
        setTodos([...process]);

        setPageCursor(11);
      }
    });

    setIsRefreshing(false);
  }, []);

  return (
    <Container>
      <Doc />
      {/* <Unsubscribe /> */}
      {/* <Pagination /> */}
      {/* <StyledInput
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
      />

      <FlatList
        data={todos}
        keyExtractor={keyExtractor}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        windowSize={10}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
      /> */}
    </Container>
  );
};

export default memo(App);
