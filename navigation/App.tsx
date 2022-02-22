import { memo } from 'react';
import styled from '@emotion/native';

const Container = styled.View({
  flex: 1,
});

const StyledText = styled.Text({
  fontSize: 16,
});

const App = () => {
  return (
    <Container>
      <StyledText>hello world</StyledText>
    </Container>
  );
};

export default memo(App);
