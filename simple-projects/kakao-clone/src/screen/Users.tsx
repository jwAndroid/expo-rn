import { memo } from 'react';
import { StyledText } from '../components/common';
import { SafeAreaContainer } from '../components/layout';

const Users = () => {
  return (
    <SafeAreaContainer>
      <StyledText color="black">친구들</StyledText>
    </SafeAreaContainer>
  );
};

export default memo(Users);
