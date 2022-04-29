import styled from '@emotion/native';
import { FC, memo, ReactNode } from 'react';
// import { ImageSourcePropType, View } from 'react-native';
import { useTheme } from '@emotion/react';

import StyledText from './StyledText';

const Container = styled.View(({ theme }) => ({
  width: '100%',
  height: theme.constants.header,
  backgroundColor: theme.color.white,
  flexDirection: 'row',
}));

const TitleContainer = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: 'yellow',
  justifyContent: 'center',
  paddingLeft: 10,
}));

const IconContainer = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: 'red',
  justifyContent: 'flex-end',
  alignItems: 'center',
  flexDirection: 'row',
  paddingRight: 10,
}));

interface IHeader {
  title: ReactNode;
  // icon: ImageSourcePropType;
}

const Header: FC<IHeader> = ({ title }) => {
  const theme = useTheme();

  return (
    <Container>
      <TitleContainer>
        <StyledText fontSize={20} isBold>
          {title}
        </StyledText>
      </TitleContainer>

      <IconContainer>
        <StyledText>1</StyledText>
        <StyledText>2</StyledText>
        <StyledText>3</StyledText>
        <StyledText>4</StyledText>
      </IconContainer>
    </Container>
  );
};

export default memo(Header);
