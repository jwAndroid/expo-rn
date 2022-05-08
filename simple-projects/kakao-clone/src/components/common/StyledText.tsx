import { FC, memo, ReactNode } from 'react';
import styled from '@emotion/native';

interface IEmotionText {
  color: string;
  fontSize: number;
  paddingLeft: number;
  paddingRight: number;
  paddingTop: number;
  paddingBottom: number;
  marginBottom: number;
  isBold: boolean;
  isTextAlign: boolean;
}

const EmotionText = styled.Text<IEmotionText>(
  ({
    theme,
    color,
    fontSize,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    marginBottom,
    isBold,
    isTextAlign,
  }) => ({
    fontFamily: isBold
      ? theme.font.YoonGothicBold
      : theme.font.YoonGothicRegular,
    fontSize,
    color,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    marginBottom,
    includeFontPadding: false,
    textAlign: isTextAlign ? 'center' : undefined,
  })
);

interface IStyledText {
  children: ReactNode;
  color?: string;
  fontSize?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  marginBottom?: number;
  isBold?: boolean;
  isTextAlign?: boolean;
}

const StyledText: FC<IStyledText> = ({
  children,
  color = 'black',
  fontSize = 16,
  paddingLeft = 0,
  paddingRight = 0,
  paddingTop = 0,
  paddingBottom = 0,
  marginBottom = 0,
  isBold = false,
  isTextAlign = false,
}) => {
  return (
    <EmotionText
      fontSize={fontSize}
      color={color}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      marginBottom={marginBottom}
      isBold={isBold}
      ellipsizeMode="tail"
      numberOfLines={1}
      isTextAlign={isTextAlign}
    >
      {children}
    </EmotionText>
  );
};

export default memo(StyledText);
