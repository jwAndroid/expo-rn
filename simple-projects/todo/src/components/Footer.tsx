import React, { memo } from 'react';
import styled from '@emotion/native';

const Container = styled.View({
  marginBottom: 10,
});

const StyledText = styled.Text(({ theme }) => ({
  color: theme.text,
  fontWeight: 'bold',
}));

const Footer = () => {
  return (
    <Container>
      <StyledText>할일을 적어주세요!</StyledText>
    </Container>
  );
};

export default memo(Footer);
