import { memo, useCallback } from 'react';
import { SectionList, Text } from 'react-native';

import { DATA } from './src/sample/sectionData';

const App = () => {
  const keyExtractor = useCallback((item) => `${item.id}`, []);

  const renderItem = useCallback(({ item }) => {
    return <Text>{item.title}</Text>;
  }, []);

  const renderSectionHeader = useCallback(({ title }) => {
    return <Text>{title}</Text>;
  }, []);

  return (
    <SectionList
      sections={DATA}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
    />
  );
};

export default memo(App);
