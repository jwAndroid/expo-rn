import { DocumentData, onSnapshot, Query } from 'firebase/firestore';

import { TodoType } from '../../type';

export const onCollectionSnapshot = (
  path: Query<DocumentData>,
  callback: (documents: TodoType[]) => void
) => {
  onSnapshot(path, (snapshots) => {
    const arr: TodoType[] = [];

    if (snapshots) {
      snapshots.forEach((snapshot) => {
        console.log(snapshot.id);
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
