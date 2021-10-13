import React, { FC, memo } from 'react';
import { GestureResponderEvent } from 'react-native';
import styled from '@emotion/native';

interface IContainer {
  marginTop: number;
  marginBottom: number;
}

const Container = styled.View<IContainer>(({ marginTop, marginBottom }) => ({
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 20,
  marginTop,
  marginBottom,
}));

const TextContainer = styled.View({
  flex: 1,
  marginHorizontal: 13,
});

const Nickname = styled.Text({
  includeFontPadding: false,
  textAlignVertical: 'center',
  fontSize: 16,
  color: '#303030',
});

const StyledPressable = styled.Pressable({
  paddingVertical: 10,
  paddingHorizontal: 25,
  backgroundColor: '#303030',
  borderRadius: 4,
});

const StyledText = styled.Text({
  includeFontPadding: false,
  textAlignVertical: 'center',
  fontSize: 14,
  color: '#fff',
});

interface IUserItem {
  marginTop: number;
  marginBottom: number;
  nickname: string;
  buttonText: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const UserItem: FC<IUserItem> = ({
  marginTop = 0,
  marginBottom = 0,
  nickname,
  buttonText,
  onPress,
}) => {
  return (
    <Container marginTop={marginTop} marginBottom={marginBottom}>
      <TextContainer>
        <Nickname>{nickname}</Nickname>
      </TextContainer>

      <StyledPressable onPress={onPress}>
        <StyledText>{buttonText}</StyledText>
      </StyledPressable>
    </Container>
  );
};

export default memo(UserItem);
