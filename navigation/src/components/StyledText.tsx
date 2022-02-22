import { FC, memo, ReactNode } from 'react';
import styled from '@emotion/native';

interface IStyledText {
  children: ReactNode;
  fontSize: number;
  color: string;
}

const Text = styled.Text<IStyledText>(({ fontSize, color }) => ({
  fontSize,
  color,
}));

const StyledText: FC<IStyledText> = ({ children, fontSize, color }) => {
  return (
    <Text fontSize={fontSize} color={color}>
      {children}
    </Text>
  );
};

export default memo(StyledText);
