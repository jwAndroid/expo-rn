import { FC, memo, ReactNode } from 'react';
import styled from '@emotion/native';
import { GestureResponderEvent } from 'react-native';

interface IStyledText {
  children: ReactNode;
  fontSize: number;
  color: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const Text = styled.Text<IStyledText>(({ fontSize, color }) => ({
  fontSize,
  color,
}));

const StyledText: FC<IStyledText> = ({
  onPress,
  children,
  fontSize,
  color,
}) => {
  return (
    <Text onPress={onPress} fontSize={fontSize} color={color}>
      {children}
    </Text>
  );
};

export default memo(StyledText);
