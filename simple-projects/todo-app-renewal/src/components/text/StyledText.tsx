import { FC, memo, ReactNode } from 'react';
import styled from '@emotion/native';
import { GestureResponderEvent } from 'react-native';

interface IText {
  color?: string;
  fontSize?: number;
  isCompleted?: boolean;
}

const Text = styled.Text<IText>(({ theme, color, fontSize, isCompleted }) => ({
  flex: 1,
  color,
  fontSize,
  marginLeft: 3,
  textAlignVertical: 'center',
  textDecorationLine: isCompleted ? 'line-through' : 'none',
  includeFontPadding: false,
  fontFamily: theme.font.Cafe24Simplehae,
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
