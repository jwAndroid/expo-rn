import { FC, memo, ReactNode } from 'react';
import styled from '@emotion/native';

interface IEmotionText {
  color: string;
  fontSize: number;
  paddingLeft: number;
  paddingRight: number;
  isBold: boolean;
}

const EmotionText = styled.Text<IEmotionText>(
  ({ theme, color, fontSize, paddingLeft, paddingRight, isBold }) => ({
    fontFamily: isBold
      ? theme.font.YoonGothicBold
      : theme.font.YoonGothicRegular,
    fontSize,
    color,
    paddingLeft,
    paddingRight,
    includeFontPadding: false,
  })
);

interface IStyledText {
  children: ReactNode;
  color?: string;
  fontSize?: number;
  paddingLeft?: number;
  paddingRight?: number;
  isBold?: boolean;
}

const StyledText: FC<IStyledText> = ({
  children,
  color = 'black',
  fontSize = 16,
  paddingLeft = 0,
  paddingRight = 0,
  isBold = false,
}) => {
  return (
    <EmotionText
      fontSize={fontSize}
      color={color}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      isBold={isBold}
    >
      {children}
    </EmotionText>
  );
};

export default memo(StyledText);
