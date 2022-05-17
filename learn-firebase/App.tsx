import { memo, useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { doc, setDoc } from 'firebase/firestore';

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
    console.log('ue');
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
      const ref = doc(db, 'user', userId, 'todo', String(todos.length + 1));

      const post = { postId: todos.length + 1, text: value, status: 1 };

      await setDoc(ref, post);

      setValue('');
    }
  }, [value, todos]);

  const onDelete = useCallback(
    (item: TodoType) => async () => {
      const ref = doc(db, 'user', userId, 'todo', String(item.postId));

      await setDoc(ref, {
        postId: item.postId,
        text: 'delete data',
        status: -1,
      });
    },
    []
  );

  const renderItem = useCallback<ListRenderItem<TodoType>>(
    ({ item }) => {
      return (
        <ItemContainer>
          <StyledText>id:{item.postId}</StyledText>
          <StyledText>content:{item.text}</StyledText>

          <StyledText>수정</StyledText>

          <StyledText onPress={onDelete(item)}>삭제</StyledText>
        </ItemContainer>
      );
    },
    [onDelete]
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
