import { FC, memo, ReactNode } from 'react';
import styled from '@emotion/native';

interface IText {
  color: string | undefined;
  fontSize: number | undefined;
}

const Text = styled.Text<IText>(({ theme, fontSize }) => ({
  color: theme.text,
  fontSize,
}));

interface IStyledText {
  children: ReactNode;
  color?: string | undefined;
  fontSize?: number | undefined;
}

const StyledText: FC<IStyledText> = ({
  children,
  color = '#303030',
  fontSize = 16,
}) => {
  return (
    <Text color={color} fontSize={fontSize}>
      {children}
    </Text>
  );
};

export default memo(StyledText);
