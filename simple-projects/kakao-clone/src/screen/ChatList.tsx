import { memo } from 'react';
import { StyledText } from '../components/common';
import { SafeAreaContainer } from '../components/layout';

const ChatList = () => {
  return (
    <SafeAreaContainer>
      <StyledText color="black">채팅리스트</StyledText>
    </SafeAreaContainer>
  );
};

export default memo(ChatList);
