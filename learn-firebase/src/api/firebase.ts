import {
  DocumentData,
  DocumentReference,
  onSnapshot,
  Query,
} from 'firebase/firestore';

import { TodoType } from '../../type';

export const onCollectionSnapshot = (
  path: Query<DocumentData>,
  callback: (documents: TodoType[]) => void
) => {
  onSnapshot(path, (snapshots) => {
    // const documents: DocumentData[] = [];
    const test: TodoType[] = [];

    if (snapshots.size > 0) {
      snapshots.forEach((snapshot) => {
        test.push(snapshot.data() as TodoType);
        // documents.push(snapshot.data() as TodoType);
      });
    }
    // console.log(test);
    callback(test);
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

export const onDocumentSnapshot = (path: DocumentReference<DocumentData>) => {
  onSnapshot(path, (snapshots) => {
    // const documents: DocumentData[] = [];

    console.log(snapshots.data);
  });
};
