import { FC, memo } from 'react';
import { ImageSourcePropType } from 'react-native';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';

import StyledText from './StyledText';
import { setupDate } from '../../api/date';

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

const SystemContainer = styled.View({
  alignItems: 'center',
});

const MessageCount = styled.View(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  width: 20,
  height: 20,
  borderRadius: 10,
  marginTop: 3,
  backgroundColor: theme.color.thickRed,
}));

interface IRoomItem {
  avatar: ImageSourcePropType;
  title: string;
  lastMessage: string;
  isPin: boolean;
  isUnNotification: boolean;
  isLock: boolean;
  lastUpdateOn: number;
  chatCount: number;
}

const RoomItem: FC<IRoomItem> = ({
  avatar,
  title,
  lastMessage,
  isPin,
  isUnNotification,
  isLock,
  lastUpdateOn,
  chatCount,
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

        {lastMessage && (
          <StyledText fontSize={12} color={theme.color.thickGray}>
            {lastMessage}
          </StyledText>
        )}
      </ContentsContainer>

      <SystemContainer>
        <StyledText fontSize={10} color={theme.color.thickGray}>
          {setupDate(lastUpdateOn)}
        </StyledText>

        {chatCount !== 0 && (
          <MessageCount>
            <StyledText fontSize={10} color={theme.color.white} isBold>
              {chatCount}
            </StyledText>
          </MessageCount>
        )}
      </SystemContainer>
    </Container>
  );
};

export default memo(RoomItem);
