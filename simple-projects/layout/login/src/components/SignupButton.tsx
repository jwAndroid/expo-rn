import React, { FC, memo, ReactNode } from 'react';
import styled from '@emotion/native';
import { Platform } from 'react-native';

const StyeldButton = styled.Pressable({
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  paddingVertical: 15,
  marginTop: 20,
  borderRadius: 30,
  backgroundColor: '#fff',
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
      elevation: 12,
    },
  }),
});

const StyledText = styled.Text({
  fontSize: 16,
  color: '#4381d6',
  fontWeight: 'bold',
});

interface ISignupButton {
  children: ReactNode;
}

const SignupButton: FC<ISignupButton> = ({ children }) => {
  return (
    <StyeldButton>
      <StyledText>{children}</StyledText>
    </StyeldButton>
  );
};

export default memo(SignupButton);
