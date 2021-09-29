import React from 'react';
import styled from '@emotion/native';
import { StatusBar } from 'expo-status-bar';

const Container = styled.View({
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
});

export default function App() {
  return (
    <Container>
      <StatusBar style="auto" />
    </Container>
  );
}
