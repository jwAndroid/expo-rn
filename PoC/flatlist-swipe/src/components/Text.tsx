import styled from '@emotion/native';
import { FC, memo, ReactNode } from 'react';

interface IStyledText {
  color: string;
}

const StyledText = styled.Text<IStyledText>(({ color }) => ({
  fontSize: 16,
  color,
}));

interface IText {
  children: ReactNode;
  color: string;
}

const Text: FC<IText> = ({ children, color }) => {
  return <StyledText color={color}>{children}</StyledText>;
};

export default memo(Text);
