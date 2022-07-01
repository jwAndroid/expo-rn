import { memo, useCallback } from 'react';
import { SectionList, Text, View } from 'react-native';

import { DATA } from './sample/sectionData';

const DaySectionList = () => {
  const keyExtractor = useCallback((item) => `${item.id}`, []);

  const renderItem = useCallback(({ item }) => {
    return <Text style={{ marginTop: 2 }}>{item.message}</Text>;
  }, []);

  const renderSectionHeader = useCallback(({ section }) => {
    return <Text style={{ marginTop: 5 }}>{section.title}</Text>;
  }, []);

  return (
    <View>
      <View
        style={{
          width: '100%',
          height: 40,
          backgroundColor: 'gray',
          marginTop: 30,
        }}
      />

      <SectionList
        sections={DATA}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
    </View>
  );
};

export default memo(DaySectionList);
