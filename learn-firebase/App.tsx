import { memo, useCallback, useLayoutEffect, useState } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { doc, setDoc, updateDoc } from 'firebase/firestore';
import moment from 'moment';
import uuid from 'react-native-uuid';
import 'moment/locale/ko';

import { db } from './src/api/config';
import { TodoType } from './type';
import { onDataSnapshot } from './src/api/firebase';
import { todoRef } from './src/api/ref';
import {
  Container,
  ItemContainer,
  StyledInput,
  StyledText,
} from './src/style/MyStyle';

const userId = '1';

const App = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [value, setValue] = useState('');

  useLayoutEffect(() => {
    onDataSnapshot(todoRef, (documents: TodoType[]) => {
      if (documents.length > 0) {
        const process = documents.filter(
          (document) => document.status === 1,
          []
        );

        setTodos(process);
      }
    });
  }, []);

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
      };

      await setDoc(ref, post);

      setValue('');
    }
  }, [value]);

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

  const renderItem = useCallback<ListRenderItem<TodoType>>(
    ({ item }) => {
      return (
        <ItemContainer>
          <StyledText>content:{item.text}</StyledText>

          <StyledText onPress={onUpdate(item)}>수정</StyledText>

          <StyledText onPress={onDelete(item)}>삭제</StyledText>
        </ItemContainer>
      );
    },
    [onUpdate, onDelete]
  );

  return (
    <Container>
      <StyledInput
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
      />

      <FlatList
        data={todos}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </Container>
  );
};

export default memo(App);
