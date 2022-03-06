import { FC, memo } from 'react';
import { GestureResponderEvent } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styled from '@emotion/native';

const FloatingButtonContainer = styled.View(({ theme }) => ({
  width: '100%',
  alignItems: 'center',
  backgroundColor: theme.background,
}));

interface IFloatingButton {
  onPress: (event: GestureResponderEvent) => void;
}

const FloatingButton: FC<IFloatingButton> = ({ onPress }) => {
  return <></>;
};

export default memo(FloatingButton);
