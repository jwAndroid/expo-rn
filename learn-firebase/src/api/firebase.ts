import {
  CollectionReference,
  DocumentData,
  DocumentReference,
  onSnapshot,
} from 'firebase/firestore';

export const onCollectionSnapshot = (
  path: CollectionReference<DocumentData>,
  callback: (documents: DocumentData[]) => void
) => {
  onSnapshot(path, (snapshots) => {
    const documents: DocumentData[] = [];

    if (snapshots.size > 0) {
      snapshots.forEach((snapshot) => {
        documents.push(snapshot.data());
      });
    }
    callback(documents);
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
