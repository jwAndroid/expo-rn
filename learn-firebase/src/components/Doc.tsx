import { memo, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';

import { db } from '../api/config';

// no snapshot data
const Doc = () => {
  const [docData, setDocData] = useState();

  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(collection(db, 'user', '2', 'todo'));

      const data = querySnapshot.docs.map((doc) => doc.data(), []);

      setDocData(data[0].text);
    })();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{docData}</Text>
    </View>
  );
};

export default memo(Doc);
