import styled from '@emotion/native';
import { useTheme } from '@emotion/react';
import { FC, memo, useCallback } from 'react';
import {
  GestureResponderEvent,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';

import StyledText from './StyledText';

const Container = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
});

const ContentsContainer = styled.View({
  flex: 1,
});

const ChipContainer = styled.View({
  flex: 1,
  alignItems: 'flex-end',
});

interface IAvatar {
  avatarWidth: number;
  avatarHeight: number;
  avatarRadius: number;
}

const Avatar = styled.Image<IAvatar>(
  ({ avatarWidth, avatarHeight, avatarRadius }) => ({
    width: avatarWidth,
    height: avatarHeight,
    borderRadius: avatarRadius,
  })
);

const Chip = styled.View(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  paddingVertical: 6,
  paddingHorizontal: 10,
  borderWidth: 1.5,
  borderRadius: 20,
  borderColor: theme.color.green,
}));

const PlayButton = styled.Image(({ theme }) => ({
  width: 10,
  height: 10,
  marginLeft: 10,
  tintColor: theme.color.green,
}));

interface IUserCard {
  name: string;
  introduction?: string;
  introductionSize?: number;
  fontSize?: number;
  isBold: boolean;
  imageUrl: string;
  avatarWidth: number;
  avatarHeight: number;
  avatarRadius: number;
  music?: string;
  onPressChip?: ((event: GestureResponderEvent) => void) | undefined;
}

const UserCard: FC<IUserCard> = ({
  name,
  introduction,
  introductionSize,
  fontSize,
  isBold,
  imageUrl,
  avatarWidth,
  avatarHeight,
  avatarRadius,
  music,
  onPressChip,
}) => {
  const source = useCallback((imageUri: string) => {
    return { uri: imageUri };
  }, []);

  const theme = useTheme();

  return (
    <Container>
      <Avatar
        source={source(imageUrl)}
        avatarWidth={avatarWidth}
        avatarHeight={avatarHeight}
        avatarRadius={avatarRadius}
        resizeMode="cover"
      />
      <ContentsContainer>
        <StyledText
          color={theme.text}
          fontSize={fontSize}
          isBold={isBold}
          paddingLeft={10}
        >
          {name}
        </StyledText>

        {!!introduction && (
          <StyledText
            color={theme.color.subtitle}
            fontSize={introductionSize}
            paddingLeft={10}
            paddingTop={5}
          >
            {introduction}
          </StyledText>
        )}
      </ContentsContainer>

      {!!music && (
        <ChipContainer>
          <TouchableWithoutFeedback onPress={onPressChip}>
            <Chip>
              <StyledText
                color={theme.color.gray}
                fontSize={14}
                marginBottom={Platform.OS === 'android' ? 3 : 1}
                paddingLeft={8}
                paddingRight={8}
              >
                {music}
              </StyledText>

              <PlayButton source={theme.icon.playbutton} />
            </Chip>
          </TouchableWithoutFeedback>
        </ChipContainer>
      )}
    </Container>
  );
};

export default memo(UserCard);
