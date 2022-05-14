import { memo, useCallback, useEffect, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import styled from '@emotion/native';
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from 'firebase/firestore';

import { db } from './src/api/config';

import { TodoType } from './type';

const Container = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledText = styled.Text({
  fontSize: 30,
  color: 'blue',
});

const user = {
  name: '최지웅',
  age: 28,
};

const App = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [textValue, setTextValue] = useState('');

  useEffect(() => {
    const collectionRef = collection(db, 'user', '1', 'todo');
    const queryRef = query(collectionRef, orderBy('id', 'asc'));

    onSnapshot(queryRef, (snapshots) => {
      const arr: TodoType[] = [];

      snapshots.forEach((snapshot) => {
        console.log(snapshot.id);
        arr.push(snapshot.data() as TodoType);
      });

      setTodos(arr);
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

    await addDoc(collectionRef, {
      id: todos.length + 1,
      text: textValue,
    });

    setTextValue('');
  }, [textValue, todos.length]);

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

      {todos.map((item) => {
        return <Text key={item.id}>{item.text}</Text>;
      }, [])}
    </Container>
  );
};

export default memo(App);
