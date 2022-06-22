// import { memo, useCallback, useEffect, useMemo, useState } from 'react';
// import {
//   FlatList,
//   ListRenderItem,
//   StyleProp,
//   Text,
//   View,
//   ViewStyle,
// } from 'react-native';

// import { sampleData } from './sample/sampledata';
// import { ChatEntity } from './type';

// const DayHeader = () => {
//   const [data, setData] = useState<ChatEntity[]>(sampleData);

//   useEffect(() => {
//     const list1 = [...data];
//     const list2 = [...data];

//     const deduplication = list1.filter(
//       (arr, index, callback) =>
//         index === callback.findIndex((t) => t.date === arr.date)
//     );

//     const dateDeleteList = list2.map((data) => {
//       return { ...data, date: '' };
//     });

//     const result = [...deduplication, ...dateDeleteList].filter(
//       (arr, index, callback) =>
//         index === callback.findIndex((t) => t.id === arr.id)
//     );

//     const sorted = result.sort((a, b) => a.id - b.id);

//     setData(sorted);
//   }, [data]);

//   const ListHeaderComponentStyle = useMemo<StyleProp<ViewStyle>>(() => {
//     return {
//       backgroundColor: 'blue',
//     };
//   }, []);

//   const keyExtractor = useCallback((item) => `${item.id}`, []);

//   const ListHeaderComponent = useCallback((item) => {
//     return (
//       <View>
//         <Text>{item.date}</Text>
//       </View>
//     );
//   }, []);

//   const renderItem = useCallback<ListRenderItem<ChatEntity>>(({ item }) => {
//     return (
//       <View style={{ alignItems: 'flex-end' }}>
//         {item.date === '' ? undefined : (
//           <Text style={{ marginTop: 10 }}>{item.date}</Text>
//         )}

//         <Text style={{ fontSize: 13, color: 'blue' }}>{item.message}</Text>
//       </View>
//     );
//   }, []);

//   return (
//     <View style={{ flex: 1, backgroundColor: 'gray' }}>
//       <FlatList
//         data={data}
//         keyExtractor={keyExtractor}
//         renderItem={renderItem}
//         ListHeaderComponent={ListHeaderComponent}
//         ListHeaderComponentStyle={ListHeaderComponentStyle}
//       />
//     </View>
//   );
// };

// export default memo(DayHeader);
