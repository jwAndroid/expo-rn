import styled from '@emotion/native';
import { FC, memo, ReactNode } from 'react';
import { GestureResponderEvent } from 'react-native';

interface IButton {
  children: ReactNode;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}

const StyledButton = styled.Pressable({
  width: '100%',
  paddingVertical: 10,
  backgroundColor: '#303030',
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledText = styled.Text({
  fontSize: 16,
  color: '#fff',
});

const Button: FC<IButton> = ({ children, onPress }) => {
  return (
    <StyledButton>
      <StyledText onPress={onPress}>{children}</StyledText>
    </StyledButton>
  );
};

export default memo(Button);
