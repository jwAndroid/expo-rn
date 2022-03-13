import { FC, memo } from 'react';
import styled from '@emotion/native';
import { GestureResponderEvent, Text } from 'react-native';

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
  onPress: (id: number) => (event: GestureResponderEvent) => void;
}

const Bin: FC<IBin> = ({ todo, onPress }) => {
  return (
    <Container>
      <StyledText>{todo.text}</StyledText>

      <Text
        style={{ fontSize: 20, marginRight: 20 }}
        onPress={onPress(todo.id)}
      >
        R
      </Text>
    </Container>
  );
};

export default memo(Bin);
