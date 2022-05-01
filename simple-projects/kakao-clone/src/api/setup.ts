import { FAVORITES_SEC_INDEX, RECOMEND_SEC_INDEX } from '../constants';
import { IUser } from '../type';

export const setupFavorites = (
  id: number,
  section: number,
  listData: IUser[]
) => {
  const newData = [...listData];
  if (section === FAVORITES_SEC_INDEX) {
    const foundIndex = listData[section].data.findIndex(
      (item) => item.id === id
    );

    newData[section].data[foundIndex].section = RECOMEND_SEC_INDEX;

    newData[RECOMEND_SEC_INDEX].data.unshift(newData[section].data[foundIndex]);

    newData[section].data.splice(foundIndex, 1);
  }
  return newData;
};

export const setupFriends = () => {};
