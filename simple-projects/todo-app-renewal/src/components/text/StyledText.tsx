import { FC, memo, ReactNode } from 'react';
import styled from '@emotion/native';

interface IText {
  color?: string;
  fontSize?: number;
}

const Text = styled.Text<IText>(({ color, fontSize }) => ({
  color,
  fontSize,
}));

interface IStyledText {
  children: ReactNode;
  color?: string;
  fontSize?: number;
}

const StyledText: FC<IStyledText> = ({ children, color, fontSize }) => {
  return (
    <Text color={color} fontSize={fontSize}>
      {children}
    </Text>
  );
};

export default memo(StyledText);
