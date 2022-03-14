import { FC, memo } from 'react';
import styled from '@emotion/native';
import { GestureResponderEvent } from 'react-native';
import { useTheme } from '@emotion/react';

import { StyledText } from './text';

const Container = styled.View(({ theme }) => ({
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: theme.itemBackground,
  borderRadius: 10,
  padding: 15,
  marginVertical: 5,
}));

const Recovery = styled.Image(({ theme }) => ({
  width: 20,
  height: 20,
  tintColor: theme.text,
}));

const PressableIcon = styled.Pressable(() => ({
  marginRight: 8,
}));

interface IBin {
  todo: TodoObject;
  onPress: (id: number) => (event: GestureResponderEvent) => void;
}

const Bin: FC<IBin> = ({ todo, onPress }) => {
  const theme = useTheme();

  return (
    <Container>
      <StyledText>{todo.text}</StyledText>

      <PressableIcon onPress={onPress(todo.id)}>
        <Recovery source={theme.icon.recovery} />
      </PressableIcon>
    </Container>
  );
};

export default memo(Bin);
