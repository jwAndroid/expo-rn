import { memo, useCallback, useEffect, useState } from 'react';
import { FlatList, ListRenderItem, TextInput, View } from 'react-native';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  setDoc,
  SnapshotMetadata,
} from 'firebase/firestore';
import styled from '@emotion/native';

import { db } from './src/api/config';
import { TodoType } from './type';
import { onDataSnapshot } from './src/api/firebase';
import { todoRef } from './src/api/ref';

const Container = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledText = styled.Text({
  fontSize: 30,
  color: 'blue',
});

const ItemContainer = styled.Pressable({
  width: '100%',
});

const user = {
  name: '최지웅',
  age: 28,
};

const App = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [textValue, setTextValue] = useState('');

  const keyExtractor = useCallback((item: TodoType) => `${item.id}`, []);

  useEffect(() => {
    onDataSnapshot(todoRef, (documents: TodoType[]) => {
      if (documents.length > 0) {
        setTodos(documents);
      }
    });
  }, []);

  const onCreate = useCallback(async () => {
    await setDoc(doc(db, 'user', '1'), user);
  }, []);

  const onChangeText = useCallback((text: string) => {
    setTextValue(text);
  }, []);

  const onSubmitEditing = useCallback(async () => {
    const collectionRef = collection(db, 'user', '1', 'todo');

    // await addDoc(collectionRef, {
    //   id: todos.length + 1,
    //   text: textValue,
    // });

    // setTextValue('');
  }, []);

  const onPress = useCallback(
    (item: TodoType) => () => {
      onDataSnapshot(todoRef, (documents: TodoType[]) => {});

      const manRef = doc(db, 'user', '1', 'todo');
      // console.log(item);

      // const del = todos.filter((todo) => todo.id !== item.id);
      // setTodos(del);

      // deleteDoc(manRef);
    },
    [todos]
  );

  const onLongPress = useCallback(() => {
    console.log('onLongPress');
  }, []);

  const renderItem = useCallback<ListRenderItem<TodoType>>(
    ({ item }) => {
      return (
        <ItemContainer onLongPress={onLongPress} onPress={onPress(item)}>
          <StyledText>{item.text}</StyledText>
        </ItemContainer>
      );
    },
    [onLongPress, onPress]
  );

  return (
    <Container>
      <View style={{ marginVertical: 50 }}>
        <StyledText onPress={onCreate}>Create User</StyledText>
      </View>

      <TextInput
        style={{
          width: '100%',
          height: 50,
          backgroundColor: 'gray',
          marginBottom: 30,
        }}
        value={textValue}
        placeholder="입력창"
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
