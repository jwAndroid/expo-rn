import { memo, useCallback, useEffect, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import styled from '@emotion/native';
import {
  addDoc,
  collection,
  doc,
  limit,
  orderBy,
  query,
  setDoc,
} from 'firebase/firestore';

import { db } from './src/api/config';
import { onCollectionSnapshot } from './src/api/firebase';
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
  // const [documents, setDocuments] = useState<DocumentData[]>([]);
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [textValue, setTextValue] = useState('');

  const docRef = doc(db, 'user', '1');

  const collectionRef = collection(db, 'user', '1', 'todo');
  const queryRef = query(collectionRef, orderBy('id', 'asc'), limit(100));

  useEffect(() => {
    onCollectionSnapshot(queryRef, (documents: TodoType[]) => {
      if (documents.length > 0) {
        setTodos(documents);
      }
    });
  }, [queryRef]);

  const onCreate = useCallback(async () => {
    await setDoc(docRef, user);
  }, [docRef]);

  const onChangeText = useCallback((text: string) => {
    setTextValue(text);
  }, []);

  const onSubmitEditing = useCallback(async () => {
    await addDoc(collectionRef, {
      id: 2,
      text: textValue,
    });

    setTextValue('');
  }, [collectionRef, textValue]);

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
