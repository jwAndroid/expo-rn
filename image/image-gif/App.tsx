import { memo } from 'react';
import styled from '@emotion/native';

const Container = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});

const SplashLogo = styled.Image({
  width: 160,
  height: 160,
});

const App = () => {
  return (
    <Container>
      <SplashLogo source={require('./assets/test.gif')} />
    </Container>
  );
};

export default memo(App);
