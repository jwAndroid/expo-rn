import { memo } from 'react';
import styled from '@emotion/native';
import { StatusBar } from 'react-native';

import { Navigation } from './src/navigation';

const Container = styled.View({
  flex: 1,
});

const App = () => {
  return (
    <Container>
      <StatusBar />

      <Navigation />
    </Container>
  );
};

export default memo(App);
