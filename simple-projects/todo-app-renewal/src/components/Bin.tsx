import { FC, memo } from 'react';
import styled from '@emotion/native';

import { StyledText } from './text';

const Container = styled.View(({ theme }) => ({
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: theme.color.gray,
  borderRadius: 10,
  padding: 5,
  marginVertical: 5,
  opacity: 0.5,
}));

interface IBin {
  todo: TodoObject;
  // onRecovery: (id: number) => (event: GestureResponderEvent) => void;
}

const Bin: FC<IBin> = ({ todo }) => {
  return (
    <Container>
      <StyledText>{todo.text}</StyledText>
    </Container>
  );
};

export default memo(Bin);
