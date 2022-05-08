import { FC, memo, useCallback } from 'react';
import { ImageSourcePropType } from 'react-native';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';
import moment from 'moment';

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
  lastUpdateOn: number;
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

  const date = useCallback(() => {
    const ago = moment(
      moment(lastUpdateOn).format('YYYY.MM.DD'),
      'YYYY.MM.DD'
    ).fromNow();

    if (
      moment(moment(Date.now()).format('YYYY-MM-DD')).isSame(
        moment(lastUpdateOn).format('YYYY-MM-DD')
      )
    ) {
      return moment(lastUpdateOn).format('A HH:mm');
    }

    if (ago === 'a day ago' || ago === '1 day ago') {
      return '어제';
    }

    return moment(lastUpdateOn).format('M월 DD일');
  }, [lastUpdateOn]);

  return (
    <Container>
      {avatar ? (
        <Avatar source={avatar} />
      ) : (
        <Avatar source={theme.icon.placeholder} />
      )}

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
          {date()}
        </StyledText>
      </DateContainer>
    </Container>
  );
};

export default memo(RoomItem);
