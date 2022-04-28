import styled from '@emotion/native';
import { FC, memo, ReactNode } from 'react';
// import { ImageSourcePropType, View } from 'react-native';
import { useTheme } from '@emotion/react';

import StyledText from './StyledText';

const StyledHeader = styled.View(({ theme }) => ({
  width: '100%',
  height: theme.constants.header,
  backgroundColor: theme.color.white,
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  paddingLeft: theme.constants.paddingLeft,
}));

interface IHeader {
  title: ReactNode;
  // icon: ImageSourcePropType;
}

const Header: FC<IHeader> = ({ title }) => {
  const theme = useTheme();

  return (
    <StyledHeader>
      <StyledText color={theme.color.black}>{title}</StyledText>
    </StyledHeader>
  );
};

export default memo(Header);
