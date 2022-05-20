import React, { memo } from 'react';
import styled from '@emotion/native';

const Container = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledText = styled.Text({
  fontSize: 18,
});

const App = () => {
  return (
    <Container>
      <StyledText>FlatList Grid</StyledText>
    </Container>
  );
};

export default memo(App);
