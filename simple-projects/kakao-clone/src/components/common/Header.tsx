import { FC, memo, ReactNode } from 'react';
import {
  GestureResponderEvent,
  ImageSourcePropType,
  TouchableWithoutFeedback,
} from 'react-native';
import styled from '@emotion/native';

import StyledText from './StyledText';

const Container = styled.View(({ theme }) => ({
  width: '100%',
  height: theme.constants.header,
  flexDirection: 'row',
}));

const TitleContainer = styled.View(() => ({
  flex: 1,
  justifyContent: 'center',
  paddingLeft: 15,
}));

const IconContainer = styled.View(() => ({
  flex: 1,
  justifyContent: 'flex-end',
  alignItems: 'center',
  flexDirection: 'row',
}));

const Icon = styled.Image({
  width: 22,
  height: 22,
  marginRight: 20,
});

interface IHeader {
  title: ReactNode;
  fontSize?: number;
  one?: ImageSourcePropType;
  oneOnPress?: ((event: GestureResponderEvent) => void) | undefined;
  two?: ImageSourcePropType;
  twoOnPress?: ((event: GestureResponderEvent) => void) | undefined;
  three?: ImageSourcePropType;
  threeOnPress?: ((event: GestureResponderEvent) => void) | undefined;
  four?: ImageSourcePropType;
  fourOnPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const Header: FC<IHeader> = ({
  title,
  fontSize,
  one,
  oneOnPress,
  two,
  twoOnPress,
  three,
  threeOnPress,
  four,
  fourOnPress,
}) => {
  return (
    <Container>
      <TitleContainer>
        <StyledText fontSize={fontSize} isBold>
          {title}
        </StyledText>
      </TitleContainer>

      <IconContainer>
        {one && (
          <TouchableWithoutFeedback onPress={oneOnPress}>
            <Icon source={one} resizeMode="contain" />
          </TouchableWithoutFeedback>
        )}
        {two && (
          <TouchableWithoutFeedback onPress={twoOnPress}>
            <Icon source={two} resizeMode="contain" />
          </TouchableWithoutFeedback>
        )}
        {three && (
          <TouchableWithoutFeedback onPress={threeOnPress}>
            <Icon source={three} resizeMode="contain" />
          </TouchableWithoutFeedback>
        )}
        {four && (
          <TouchableWithoutFeedback onPress={fourOnPress}>
            <Icon source={four} resizeMode="contain" />
          </TouchableWithoutFeedback>
        )}
      </IconContainer>
    </Container>
  );
};

export default memo(Header);
