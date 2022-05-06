import moment from 'moment';
// 안써도 자동으로 한국 시간을 불러온다. 명확하게 하기 위해 import
import 'moment/locale/ko';

const nowTime = moment().format('YYYY-MM-DD HH:mm:ss');
console.log(nowTime);
