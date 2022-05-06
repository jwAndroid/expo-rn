// 05월01일 타임스탬프 1651355793438
// 05월03일 타임스탬프 1651528743382
// 05월07일 타임스탬프 1651874164128

import moment from 'moment';
// 안써도 자동으로 한국 시간을 불러온다. 명확하게 하기 위해 import
import 'moment/locale/ko';

// const now = Date.now(); // 오늘 타임스탬프
// const nowTime = moment(1651355793438).format('YYYY-MM-DD'); // 모맨트->변환

// console.log(nowTime);

const nowTime = moment().format('YYYY-MM-DD HH:mm:ss');
console.log(nowTime);
