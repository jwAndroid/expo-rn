import { memo } from 'react';
import styled from '@emotion/native';

const Container = styled.View({
  flex: 1,
});

const EmotionsText = styled.Text({
  fontSize: 16,
});

const App = () => {
  return (
    <Container>
      <EmotionsText>hello world</EmotionsText>
    </Container>
  );
};

export default memo(App);
