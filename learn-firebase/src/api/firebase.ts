import { DocumentData, onSnapshot, Query } from 'firebase/firestore';

import { TodoType } from '../../type';

export const onDataSnapshot = (
  path: Query<DocumentData>,
  callback: (documents: TodoType[]) => void
) => {
  onSnapshot(path, (snapshot) => {
    const arr: TodoType[] = [];

    console.log('=================================');
    console.log('onSnapshot() start');

    if (snapshot) {
      snapshot.forEach((snapshot) => {
        arr.push(snapshot.data() as TodoType);
      });
    }

    callback(arr);
  });
};

/* useage
  useEffect(() => {
    onCollectionSnapshot(path, (documents: DocumentData[]) => {
      if (documents.length > 0) {
        console.log(documents);
      }
    });
  }, [path]);
*/
