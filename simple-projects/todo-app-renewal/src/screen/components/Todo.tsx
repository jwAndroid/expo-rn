import { memo } from 'react';
import styled from '@emotion/native';

import { StyledText } from '../../components/text';

const Container = styled.View({
  flex: 1,
});

const Todo = () => {
  return (
    <Container>
      <StyledText>todo</StyledText>
    </Container>
  );
};

export default memo(Todo);
