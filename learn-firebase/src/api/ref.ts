import { collection, orderBy, query } from 'firebase/firestore';
import { db } from './config';

export const todoRef = query(
  collection(db, 'user', '1', 'todo'),
  orderBy('id', 'asc')
);
