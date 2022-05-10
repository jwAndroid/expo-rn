import { memo } from 'react';
import styled from '@emotion/native';

const Container = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledText = styled.Text({
  fontSize: 16,
});

const Settings = () => {
  return (
    <Container>
      <StyledText>Settings</StyledText>
    </Container>
  );
};

export default memo(Settings);
