import { FC, memo, ReactNode } from 'react';
import styled from '@emotion/native';

interface IEmotionText {
  color: string;
}

const EmotionText = styled.Text<IEmotionText>(({ color }) => ({
  fontSize: 18,
  color,
}));

interface IStyledText {
  children: ReactNode;
  color: string;
}

const StyledText: FC<IStyledText> = ({ children, color }) => {
  return <EmotionText color={color}>{children}</EmotionText>;
};

export default memo(StyledText);
