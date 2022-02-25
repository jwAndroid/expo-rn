import styled from '@emotion/native';
import React, { memo } from 'react';

const Container = styled.View({
  flex: 1,
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#303030',
});

const StyledText = styled.Text({
  fontSize: 18,
  color: '#fff',
  fontWeight: '700',
});

const Splash = () => {
  return (
    <Container>
      <StyledText>Todo App</StyledText>
    </Container>
  );
};

export default memo(Splash);
