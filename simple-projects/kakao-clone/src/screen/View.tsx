import { memo } from 'react';
import { StyledText } from '../components/common';
import { SafeAreaContainer } from '../components/layout';

const View = () => {
  return (
    <SafeAreaContainer>
      <StyledText color="black">뷰</StyledText>
    </SafeAreaContainer>
  );
};

export default memo(View);
