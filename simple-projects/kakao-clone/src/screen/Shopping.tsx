import { memo } from 'react';
import { StyledText } from '../components/common';
import { SafeAreaContainer } from '../components/layout';

const Shopping = () => {
  return (
    <SafeAreaContainer>
      <StyledText color="black">쇼핑</StyledText>
    </SafeAreaContainer>
  );
};

export default memo(Shopping);
