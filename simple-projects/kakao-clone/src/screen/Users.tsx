import { memo } from 'react';
import { View } from 'react-native';

import { Header, StyledText } from '../components/common';
import { SafeAreaContainer } from '../components/layout';

const Users = () => {
  return (
    <SafeAreaContainer>
      <Header title="친구" />

      <View style={{ flex: 1, backgroundColor: '#556677' }} />
      <StyledText color="black">유저</StyledText>
    </SafeAreaContainer>
  );
};

export default memo(Users);
