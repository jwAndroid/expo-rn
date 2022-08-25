import { memo, useCallback, useEffect, useState } from 'react';
import {
  ListRenderItem,
  Pressable,
  SafeAreaView,
  SectionList,
  Text,
  TextInput,
  View,
} from 'react-native';

import { groupBy } from './src/grouping/groupBy';
import { chats } from './src/sampleData/chats';

import { RoomEntity, SectionEntity } from './type';

const App = () => {
  const [original, setOriginal] = useState<RoomEntity[]>([]);
  const [data, setData] = useState<SectionEntity[]>([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    setOriginal(chats);
  }, []);

  useEffect(() => {
    const results = groupBy(original, (i) => i.date);

    const values = Object.values(results).map((values) => {
      return { data: values };
    });

    const assign = Object.keys(results).map((key, index) => {
      return Object.assign(values[index], { title: key });
    });

    setData(assign);
  }, [original]);

  const keyExtractor = useCallback((item: RoomEntity) => `${item.id}`, []);

  const renderItem = useCallback<ListRenderItem<RoomEntity>>(({ item }) => {
    return <Text>{item.message}</Text>;
  }, []);

  const renderSectionHeader = useCallback(({ section }) => {
    return <Text>{section.title}</Text>;
  }, []);

  const onChangeText = useCallback((text: string) => {
    setValue(text);
  }, []);

  const onSubmitEditing = useCallback(() => {
    const obj = { id: 99, date: '2022-06-22', message: value, name: 'jw' };

    setOriginal([obj, ...original]);
  }, []);

  return (
    <View style={{ flex: 1, marginTop: 30 }}>
      <SectionList
        sections={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />

      <TextInput
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        style={{ width: '100%', height: 50, backgroundColor: 'skyblue' }}
      />
    </View>
  );
};

export default memo(App);
