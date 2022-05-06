import { FC, memo } from 'react';
import { ImageSourcePropType } from 'react-native';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';

import StyledText from './StyledText';

const Container = styled.View(() => ({
  flex: 1,
  flexDirection: 'row',
  paddingHorizontal: 15,
}));

const ContentsContainer = styled.View({
  flex: 1,
  alignItems: 'flex-start',
  justifyContent: 'center',
  marginLeft: 10,
});

const TitleIconContainer = styled.View({
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 5,
});

const Avatar = styled.Image(() => ({
  width: 44,
  height: 44,
  borderRadius: 16,
}));

const Icon = styled.Image(() => ({
  width: 12,
  height: 12,
  marginLeft: 5,
}));

const DateContainer = styled.View({
  marginTop: 8,
});

interface IRoomItem {
  avatar: ImageSourcePropType;
  title: string;
  lastMessage: string;
  isPin: boolean;
  isUnNotification: boolean;
  isLock: boolean;
  lastUpdateOn: string;
}

const RoomItem: FC<IRoomItem> = ({
  avatar,
  title,
  lastMessage,
  isPin,
  isUnNotification,
  isLock,
  lastUpdateOn,
}) => {
  const theme = useTheme();

  return (
    <Container>
      <Avatar source={avatar} />

      <ContentsContainer>
        <TitleIconContainer>
          <StyledText fontSize={15} isBold>
            {title}
          </StyledText>

          {isPin && <Icon source={theme.icon.pinfill} />}
          {isUnNotification && <Icon source={theme.icon.unnotification} />}
          {isLock && <Icon source={theme.icon.lock} />}
        </TitleIconContainer>

        <StyledText fontSize={12} color={theme.color.thickGray}>
          {lastMessage}
        </StyledText>
      </ContentsContainer>

      <DateContainer>
        <StyledText fontSize={10} color={theme.color.thickGray}>
          {lastUpdateOn}
        </StyledText>
      </DateContainer>
    </Container>
  );
};

export default memo(RoomItem);
