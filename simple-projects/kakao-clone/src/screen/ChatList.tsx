import { memo } from 'react';
import { View } from 'react-native';

import { StyledText } from '../components/common';
import Header from '../components/common/Header';
import { SafeAreaContainer } from '../components/layout';

const ChatList = () => {
  return (
    <SafeAreaContainer>
      <Header />

      <View style={{ flex: 1, backgroundColor: '#556677' }} />
      <StyledText color="black">채팅리스트</StyledText>
    </SafeAreaContainer>
  );
};

export default memo(ChatList);
