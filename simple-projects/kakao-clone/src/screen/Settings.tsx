import { memo } from 'react';
import { StyledText } from '../components/common';
import { SafeAreaContainer } from '../components/layout';

const Settings = () => {
  return (
    <SafeAreaContainer>
      <StyledText color="black">세팅</StyledText>
    </SafeAreaContainer>
  );
};

export default memo(Settings);
