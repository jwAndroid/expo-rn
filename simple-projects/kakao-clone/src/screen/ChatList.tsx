import { memo, useCallback } from 'react';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';

import { Banner, Header } from '../components/common';
import { SafeAreaContainer } from '../components/layout';
import { bannerData } from '../api/sample/banner';
import { BannerEntity } from '../type';

const BannerContainer = styled.View({
  paddingHorizontal: 15,
  marginTop: 15,
  marginBottom: 20,
});

const Container = styled.View({
  flex: 1,
  backgroundColor: 'orange',
});

const ChatList = () => {
  const theme = useTheme();

  const onPressBanner = useCallback(
    (item: BannerEntity) => () => {
      console.log(item);
    },
    []
  );

  return (
    <SafeAreaContainer>
      <Header
        title="채팅"
        fontSize={24}
        one={theme.icon.search}
        two={theme.icon.chatplus}
        three={theme.icon.music}
        four={theme.icon.headersetting}
      />
      <BannerContainer>
        <Banner
          source={theme.icon.samplebanner}
          onPress={onPressBanner(bannerData)}
          status={bannerData.status}
        />
      </BannerContainer>

      <Container />
    </SafeAreaContainer>
  );
};

export default memo(ChatList);
