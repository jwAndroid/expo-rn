import { memo } from 'react';
import styled from '@emotion/native';

const Container = styled.View(() => ({
  flex: 1,
}));

const StyledText = styled.Text(() => ({
  fontSize: 18,
}));

const App = () => {
  return (
    <Container>
      <StyledText>START</StyledText>
    </Container>
  );
};

export default memo(App);
