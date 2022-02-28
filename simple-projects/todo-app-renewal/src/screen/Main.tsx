import { memo } from 'react';
import { BaseContainer } from '../components/layout';
import { StyledText } from '../components/text';

const Main = () => {
  return (
    <BaseContainer>
      <StyledText>메인 화면asdasdasd</StyledText>
    </BaseContainer>
  );
};

export default memo(Main);
