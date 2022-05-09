import moment from 'moment';
import 'moment/locale/ko';

export const setupDate = (lastUpdateOn: number) => {
  const ago = moment(
    moment(lastUpdateOn).format('YYYY.MM.DD'),
    'YYYY.MM.DD'
  ).fromNow();

  if (
    moment(moment(Date.now()).format('YYYY-MM-DD')).isSame(
      moment(lastUpdateOn).format('YYYY-MM-DD')
    )
  ) {
    return moment(lastUpdateOn).format('A HH:mm');
  }

  if (ago === 'a day ago' || ago === '1 day ago') {
    return '어제';
  }

  return moment(lastUpdateOn).format('M월 DD일');
};
