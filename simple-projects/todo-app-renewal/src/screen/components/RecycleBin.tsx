import { FC, memo, useCallback } from 'react';
import { FlatList, GestureResponderEvent, ListRenderItem } from 'react-native';
import styled from '@emotion/native';

import { Bin } from '../../components';
import { TodoObject } from '../../type';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  paddingHorizontal: 10,
  marginVertical: 10,
  backgroundColor: theme.background,
}));

const ClearContainer = styled.View(({ theme }) => ({
  width: '100%',
  alignItems: 'flex-end',
  justifyContent: 'center',
  marginVertical: 12,
  paddingVertical: 10,
  paddingHorizontal: 20,
  backgroundColor: theme.background,
}));

const ClearText = styled.Text(({ theme }) => ({
  fontSize: 16,
  color: theme.text,
  includeFontPadding: false,
  fontFamily: theme.font.Cafe24Simplehae,
}));

interface IRecycleBin {
  todos: TodoObject[];
  onClear: ((event: GestureResponderEvent) => void) | undefined;
  onRecovery: (
    id: number
  ) => (event: GestureResponderEvent) => void | undefined;
}

const RecycleBin: FC<IRecycleBin> = ({ todos, onClear, onRecovery }) => {
  const keyExtractor = useCallback((item: TodoObject) => `${item.id}`, []);

  const renderItem = useCallback<ListRenderItem<TodoObject>>(
    ({ item }) => {
      return <Bin todo={item} onPress={onRecovery} />;
    },
    [onRecovery]
  );

  return (
    <Container>
      <ClearContainer>
        <ClearText onPress={onClear}>전체삭제</ClearText>
      </ClearContainer>

      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </Container>
  );
};

export default memo(RecycleBin);
