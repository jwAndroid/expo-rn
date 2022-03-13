import { FC, memo, ReactNode } from 'react';
import styled from '@emotion/native';
import { GestureResponderEvent } from 'react-native';

interface IText {
  color?: string;
  fontSize?: number;
  isCompleted?: boolean;
}

const Text = styled.Text<IText>(({ color, fontSize, isCompleted }) => ({
  flex: 1,
  margin: 10,
  color,
  fontSize,
  textAlignVertical: 'center',
  textDecorationLine: isCompleted ? 'line-through' : 'none',
}));

interface IStyledText {
  children: ReactNode;
  color?: string;
  fontSize?: number;
  isCompleted?: boolean;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const StyledText: FC<IStyledText> = ({
  children,
  onPress,
  color,
  fontSize = 18,
  isCompleted,
}) => {
  return (
    <Text
      isCompleted={isCompleted}
      onPress={onPress}
      color={color}
      fontSize={fontSize}
    >
      {children}
    </Text>
  );
};

export default memo(StyledText);
