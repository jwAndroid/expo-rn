import React, { memo } from 'react';
import styled from '@emotion/native';
import { StatusBar } from 'expo-status-bar';

// https://github.com/wix/react-native-calendars
// https://dingcodingco.tistory.com/3

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
    </Container>
  );
};

export default memo(App);
