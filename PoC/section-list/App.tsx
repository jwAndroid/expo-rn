import { memo, useEffect } from 'react';
import { Text, View } from 'react-native';
import { groupBy, people } from './src/grouping/ex2';

const chats = [
  { date: '2022-06-22', message: 'hi1', name: 'jw' },
  { date: '2022-06-22', message: 'hi2', name: 'jw' },
  { date: '2022-06-22', message: 'hi3', name: 'jw' },
  { date: '2022-06-23', message: 'hi4', name: 'jw' },
  { date: '2022-06-23', message: 'hi5', name: 'jw' },
  { date: '2022-06-24', message: 'hi6', name: 'jw' },
  { date: '2022-06-24', message: 'hi7', name: 'jw' },
  { date: '2022-06-24', message: 'hi8', name: 'jw' },
];

// const DATA = [
//   {
//     title: 'Main dishes',
//     data: ['Pizza', 'Burger', 'Risotto'],
//   },
//   {
//     title: 'Sides',
//     data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
//   },
//   {
//     title: 'Drinks',
//     data: ['Water', 'Coke', 'Beer'],
//   },
//   {
//     title: 'Desserts',
//     data: ['Cheese Cake', 'Ice Cream'],
//   },
// ];

const App = () => {
  useEffect(() => {
    const results = groupBy(chats, (i) => i.date);
    // 먼저 원본 리스트를 groupBy 로 분할한다.

    // * 설명
    // console.log(results); // 원본
    // console.log(Object.keys(results)); // 날짜 자른 배열
    // console.log(Object.values(results)); //자른 날짜

    // const test = Object.values(results);
    // console.log([{ title: '제목1', data: test[0] }]);
    // 이런 형태로 들어가야함

    // const key = Object.keys(results).map((key) => {
    //   return { title: key };
    // });
    //  * 설명

    const values = Object.values(results).map((values) => {
      return { data: values };
    }); // Object.values(results) 값으로 가공 후에

    const assign = Object.keys(results).map((key, index) => {
      return Object.assign(values[index], { title: key });
    }); // values[index] 의 객체에다가 { title: key } 를 넣는다.

    console.log(assign);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Text>Hello World</Text>
    </View>
  );
};

export default memo(App);
