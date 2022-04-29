import styled from '@emotion/native';
import { FC, memo, useCallback } from 'react';

import StyledText from './StyledText';

const Container = styled.View({
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 15,
  paddingVertical: 15,
});

const Avatar = styled.Image(() => ({
  width: 50,
  height: 50,
  borderRadius: 17,
  backgroundColor: 'blue',
}));

interface IUserCard {
  name: string;
  imageUrl: string;
}

const UserCard: FC<IUserCard> = ({ name, imageUrl }) => {
  const source = useCallback((imageUri: string) => {
    return { uri: imageUri };
  }, []);

  return (
    <Container>
      <Avatar source={source(imageUrl)} />
      <StyledText paddingLeft={10}>{name}</StyledText>
    </Container>
  );
};

export default memo(UserCard);
