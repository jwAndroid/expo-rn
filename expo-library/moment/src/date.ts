import moment from 'moment';
import 'moment/locale/ko';

moment.locale('ko');

export const date = (date: string) => {
  return moment(date).fromNow();
};
