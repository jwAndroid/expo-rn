import { memo, useEffect } from 'react';
import { View } from 'react-native';

import { groupBy } from './src/grouping/groupBy';
import { chats } from './src/sampleData/chats';

const App = () => {
  useEffect(() => {
    const results = groupBy(chats, (i) => i.date);
    // console.log(Object.keys(results));
    // console.log(Object.values(results));

    const values = Object.values(results).map((values) => {
      return { data: values };
    }); // Object.values(results)값으로 새로운 객체배열 가공 후에

    const assign = Object.keys(results).map((key, index) => {
      return Object.assign(values[index], { title: key });
    });
    // values[index]의 가공된 객체에다가 { title: key } 를 넣어 새로운 배열을
    // 만든다.
    // 중요한건 key를 기준으로 매핑을 한다. key 로써 그룹 되니까

    console.log(assign);
  }, []);

  return <View style={{ flex: 1 }} />;
};

export default memo(App);
