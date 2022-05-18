import {
  collection,
  endAt,
  limit,
  orderBy,
  query,
  startAt,
} from 'firebase/firestore';
import { db } from './config';

export const original = query(collection(db, 'user', '1', 'todo'));

export const todoRef = query(
  collection(db, 'user', '1', 'todo'),
  orderBy('createdAt', 'asc'),
  limit(10)
);

export const q = query(
  collection(db, 'user', '1', 'todo'),
  orderBy('cursor'),
  startAt(1),
  endAt(10)
);
