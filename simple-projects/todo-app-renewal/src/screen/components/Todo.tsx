import { memo } from 'react';
import { FlatList } from 'react-native';
import styled from '@emotion/native';

import { DATA } from '../../api/data';
import { SafeAreaContainer } from '../../components/layout';
import { StyledText } from '../../components/text';

const StyledItem = styled.View({
  backgroundColor: '#f9c2ff',
  padding: 20,
  marginVertical: 5,
  marginHorizontal: 16,
});

const Item = ({ title }) => (
  <StyledItem>
    <StyledText>{title}</StyledText>
  </StyledItem>
);

const Todo = () => {
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <SafeAreaContainer>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaContainer>
  );
};

export default memo(Todo);
