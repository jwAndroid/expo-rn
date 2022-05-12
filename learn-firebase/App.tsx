import { memo, useCallback, useEffect, useState } from 'react';
import styled from '@emotion/native';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  getDoc,
  onSnapshot,
  setDoc,
  updateDoc,
} from 'firebase/firestore';

import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { db } from './src/api/config';

const Container = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledText = styled.Text({
  fontSize: 30,
  color: 'blue',
  marginBottom: 20,
});

const data = {
  name: '새로운 path 넣기',
  age: 777,
  message: 77722,
};

const App = () => {
  const [test, setTest] = useState<DocumentData[]>([]);

  const myDoc = doc(db, 'User', 'girl');
  const myDoc2 = doc(db, 'room', '77', 'message', '501');
  const col = collection(db, 'rooms', '12', 'messages');

  useEffect(() => {
    // console.log(test);
  }, [test]);

  const onCreate = useCallback(async () => {
    await setDoc(myDoc2, data);
  }, [myDoc2]);

  const onRead = useCallback(async () => {
    const testDoc = await getDoc(myDoc2);

    const data = testDoc.data();

    console.log(data);
  }, [myDoc2]);

  // await setDoc(myDoc, { age: 18 }, { merge: false });
  // merge : true => updateDoc 기능 동일
  // merge : false => 타겟만 업데이트

  const onUpdate = useCallback(() => {
    updateDoc(myDoc, { name: '수정3', age: 133, job: 'Dev2' });
  }, [myDoc]);

  const onDelete = useCallback(() => {
    if (myDoc) {
      deleteDoc(myDoc);
    }
  }, [myDoc]);

  const addDocument = useCallback(async () => {
    await addDoc(col, {
      hi: '경로정해서 넣기23',
      a: 77723,
    });
  }, []);

  const getCollection = useCallback(async () => {
    onSnapshot(col, (snapshots) => {
      const documents: DocumentData[] = [];

      if (!snapshots.metadata.hasPendingWrites) {
        snapshots.forEach((snapshot) => {
          documents.push(snapshot.data());
        });
      }
      setTest(documents);
      // console.log(documents);
    });
  }, [col]);

  return (
    <ScrollView style={{ marginTop: 100 }}>
      <Container>
        <StyledText onPress={onCreate}>Create</StyledText>

        <StyledText onPress={onRead}>Read</StyledText>

        <StyledText onPress={onUpdate}>Update</StyledText>

        <StyledText onPress={onDelete}>Delete</StyledText>

        <View
          style={{
            width: '100%',
            height: 5,
            backgroundColor: 'black',
            marginVertical: 20,
          }}
        />

        <StyledText onPress={addDocument}>addDoc</StyledText>

        <StyledText onPress={getCollection}>getCollection</StyledText>
      </Container>
    </ScrollView>
  );
};

export default memo(App);
