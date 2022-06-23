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
  const [data, setData] = useState<SectionEntity[]>([]);

  useEffect(() => {
    const results = groupBy(chats, (i) => i.date);

    const values = Object.values(results).map((values) => {
      return { data: values };
    });

    const assign = Object.keys(results).map((key, index) => {
      return Object.assign(values[index], { title: key });
    });

    setData(assign);
  }, []);

  const keyExtractor = useCallback((item: RoomEntity) => `${item.id}`, []);

  const renderItem = useCallback<ListRenderItem<RoomEntity>>(({ item }) => {
    return <Text>{item.message}</Text>;
  }, []);

  const renderSectionHeader = useCallback(({ section }) => {
    return <Text>{section.title}</Text>;
  }, []);

  return (
    <View style={{ flex: 1, marginTop: 30 }}>
      <SectionList
        sections={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
    </View>
  );
};

export default memo(App);
