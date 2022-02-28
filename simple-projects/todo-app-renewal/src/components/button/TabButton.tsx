import styled from '@emotion/native';
import { FC, memo, ReactNode } from 'react';
import { GestureResponderEvent } from 'react-native';
import { StyledText } from '../text';

interface IContainer {
  paddingVertical?: number;
  marginTop?: number;
  isActive: boolean;
}

const Container = styled.Pressable<IContainer>(
  ({ isActive, paddingVertical, marginTop }) => ({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 87,
    paddingVertical,
    marginTop,
    backgroundColor: isActive ? '#303030' : '#101010',
  })
);

interface ITabButton {
  children: ReactNode;
  isActive: boolean;
  paddingVertical?: number;
  marginTop?: number;
  buttonTextSize?: number;
  buttonTextColor?: string;
  onPress: (event: GestureResponderEvent) => void;
}

const TabButton: FC<ITabButton> = ({
  children,
  isActive,
  paddingVertical,
  marginTop,
  buttonTextSize = 18,
  buttonTextColor = '#fff',
  onPress,
}) => {
  return (
    <Container
      isActive={isActive}
      paddingVertical={paddingVertical}
      marginTop={marginTop}
      onPress={onPress}
    >
      <StyledText fontSize={buttonTextSize} color={buttonTextColor}>
        {children}
      </StyledText>
    </Container>
  );
};

export default memo(TabButton);
