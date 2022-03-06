import styled from '@emotion/native';
import { memo } from 'react';

import { StyledText } from '../../components/text';

const Container = styled.View({
  flex: 1,
});

const RecycleBin = () => {
  return (
    <Container>
      <StyledText>RecycleBin screen</StyledText>
    </Container>
  );
};

export default memo(RecycleBin);
