import React, { FC, memo, ReactNode } from 'react';
import styled from '@emotion/native';

const StyledPressable = styled.Pressable({
  backgroundColor: '#3498db',
  borderRadius: 15,
  paddingVertical: 15,
  paddingHorizontal: 30,
  marginVertical: 10,
  justifyContent: 'center',
});

const StyledText = styled.Text({
  fontSize: 25,
  fontWeight: '600',
  color: '#fff',
});

interface IButton {
  children: ReactNode;
  onPress: () => void;
}

const Button: FC<IButton> = ({ children, onPress }) => {
  return (
    <StyledPressable onPress={onPress}>
      <StyledText>{children}</StyledText>
    </StyledPressable>
  );
};

export default memo(Button);
