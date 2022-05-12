import { memo, useCallback, useEffect, useState } from 'react';
import styled from '@emotion/native';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  getDoc,
  setDoc,
  updateDoc,
} from 'firebase/firestore';

import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { db } from './src/api/config';
import { onCollectionSnapshot, onSnapshotListener } from './src/api/firebase';

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
  name: '새로운 path 넣기2',
  age: 7772,
  message: 77722,
};

const App = () => {
  const [document, setDocument] = useState<DocumentData[]>([]);

  const manRef = doc(db, 'user', 'a');

  const col = collection(db, 'user', 'man', '1');

  const ranCol = collection(db, 'user', 'man', 'message');

  // useEffect(() => {

  // }, [col]);

  const onCreate = useCallback(async () => {
    await setDoc(manRef, data);
  }, [manRef]);

  const onRead = useCallback(async () => {
    const did = doc(db, 'user', 'man');

    const testDoc = await getDoc(did);

    const data = testDoc.data();

    console.log(data);
  }, []);

  // await setDoc(myDoc, { age: 18 }, { merge: false });
  // merge : true => updateDoc 기능 동일
  // merge : false => 타겟만 업데이트

  const onUpdate = useCallback(() => {
    updateDoc(manRef, { name: '수정3', age: 133, job: 'Dev2' });
  }, [manRef]);

  const onDelete = useCallback(() => {
    deleteDoc(manRef);
  }, [manRef]);

  const addDocument = useCallback(async () => {
    // adddDoc 은 "dev" 콜렉션에 무작위 id를 가진 객체를 계속해서 넣어짐
    // 무작위 id 를 모두 참조해서 할 수가 없으니까. col.스냅샷 이 있는것.
    await addDoc(ranCol, {
      hi: '경로정해서 넣기23',
      a: 77723,
    });
  }, [ranCol]);

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
      </Container>
    </ScrollView>
  );
};

export default memo(App);
