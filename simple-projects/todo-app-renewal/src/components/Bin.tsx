import { FC, memo } from 'react';
import styled from '@emotion/native';
import { GestureResponderEvent, Platform } from 'react-native';
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
  ...Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: {
        width: 10,
        height: 10,
      },
      shadowOpacity: 0.2,
      shadowRadius: 10,
    },
    android: {
      elevation: 20,
    },
  }),
}));

const ContantsContainer = styled.View({
  flex: 1,
});

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
      <ContantsContainer>
        <StyledText fontSize={16}>{todo.text}</StyledText>

        <StyledText fontSize={10} color={theme.color.gray}>
          {todo.updateOn}
        </StyledText>
      </ContantsContainer>

      <PressableIcon onPress={onPress(todo.id)}>
        <Recovery source={theme.icon.recovery} />
      </PressableIcon>
    </Container>
  );
};

export default memo(Bin);
