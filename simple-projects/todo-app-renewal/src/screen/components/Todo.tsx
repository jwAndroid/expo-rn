import styled from '@emotion/native';
import { memo, useCallback, useState } from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  View,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getStatusBarHeight } from 'react-native-status-bar-height';

// https://stackoverflow.com/questions/48420468/keyboardavoidingview-not-working-properly

import { StyledInput } from '../../components/input';
import { StyledText } from '../../components/text';

const { height } = Dimensions.get('screen');

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const StyledItem = styled.View({
  backgroundColor: '#f9c2ff',
  padding: 20,
  marginVertical: 8,
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
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <StyledInput />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default memo(Todo);
