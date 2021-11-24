import React, { memo } from 'react';
import styled from '@emotion/native';
import { StatusBar } from 'expo-status-bar';

import { Navigation } from './src/navigation';

const Container = styled.View({
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
});

const App = () => {
  return (
    <Container>
      <StatusBar style="auto" />

      <Navigation />
    </Container>
  );
};

export default memo(App);
