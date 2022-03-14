import { FC, memo, useEffect, useState } from 'react';
import { GestureResponderEvent } from 'react-native';
import styled from '@emotion/native';

import { Bin } from '../../components';

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
  const [data, setdata] = useState<TodoObject[]>([]);

  useEffect(() => {
    setdata(todos);
  }, [todos]);

  return (
    <Container>
      <ClearContainer>
        <ClearText onPress={onClear}>전체삭제</ClearText>
      </ClearContainer>

      {data.map(
        (todo) => (
          <Bin key={todo.id} todo={todo} onPress={onRecovery} />
        ),
        []
      )}
    </Container>
  );
};

export default memo(RecycleBin);
