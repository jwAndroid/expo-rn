import styled from '@emotion/native';
import { FC, memo, useCallback } from 'react';

import StyledText from './StyledText';

const Container = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
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

interface IUserCard {
  name: string;
  fontSize?: number;
  isBold: boolean;
  imageUrl: string;
  avatarWidth: number;
  avatarHeight: number;
  avatarRadius: number;
}

const UserCard: FC<IUserCard> = ({
  name,
  fontSize,
  isBold,
  imageUrl,
  avatarWidth,
  avatarHeight,
  avatarRadius,
}) => {
  const source = useCallback((imageUri: string) => {
    return { uri: imageUri };
  }, []);

  return (
    <Container>
      <Avatar
        source={source(imageUrl)}
        avatarWidth={avatarWidth}
        avatarHeight={avatarHeight}
        avatarRadius={avatarRadius}
      />
      <StyledText fontSize={fontSize} isBold={isBold} paddingLeft={10}>
        {name}
      </StyledText>
    </Container>
  );
};

export default memo(UserCard);
