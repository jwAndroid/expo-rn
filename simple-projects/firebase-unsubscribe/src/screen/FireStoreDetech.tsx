import { memo, useCallback, useState } from 'react';
import {
  collection,
  doc,
  DocumentData,
  onSnapshot,
  setDoc,
} from 'firebase/firestore';
import { Text, View } from 'react-native';

import { firestore } from '../config';

const FireStoreDetech = () => {
  const [data, setData] = useState();

  const write = useCallback(async () => {
    const ref = doc(firestore, 'user', '1', 'todo', String(Date.now()));

    const post = {
      text: 'value',
    };

    await setDoc(ref, post);
  }, []);

  const read = useCallback(() => {
    const litener = onSnapshot(
      collection(firestore, 'user', '1', 'todo'),
      (snapshot) => {
        const arr: DocumentData[] = [];

        snapshot.forEach((it) => {
          arr.push(it.data());
        });

        setData(arr[0].text);
      }
    );

    setTimeout(() => {
      litener();
    }, 2000);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text onPress={write}>write</Text>

      <Text onPress={read} style={{ fontSize: 20, marginTop: 50 }}>
        read
      </Text>

      <Text style={{ fontSize: 50, marginTop: 50 }}>{data}</Text>
    </View>
  );
};

export default memo(FireStoreDetech);
