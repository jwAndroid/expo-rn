import { memo, useCallback, useEffect, useState } from 'react';
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

const App = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    onDataSnapshot(todoRef, (documents: TodoType[]) => {
      if (documents.length > 0) {
        setTodos(documents);
      }
    });
  }, []);

  const keyExtractor = useCallback((item: TodoType) => `${item.id}`, []);

  const onChangeText = useCallback((text: string) => {
    setValue(text);
  }, []);

  const onSubmitEditing = useCallback(async () => {
    if (value.length > 0) {
      const ref = doc(db, 'user', '1', 'todo', String(todos.length + 1));

      await setDoc(ref, { id: todos.length + 1, text: value });

      setValue('');
    }
  }, [value, todos]);

  const renderItem = useCallback<ListRenderItem<TodoType>>(({ item }) => {
    return (
      <ItemContainer>
        <StyledText>내용:{item.text}</StyledText>

        <StyledText>수정</StyledText>

        <StyledText>삭제</StyledText>
      </ItemContainer>
    );
  }, []);

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
