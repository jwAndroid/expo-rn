import React, { memo, useCallback, useState } from 'react';
import styled from '@emotion/native';
import { StatusBar } from 'expo-status-bar';

import { Loading } from './src/components';

const Container = styled.View({
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
});

const PressContainer = styled.Pressable({
  paddingHorizontal: 30,
  paddingVertical: 10,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#303030',
});

const StyledText = styled.Text({
  fontSize: 18,
  color: '#fff',
});

// test

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onPress = useCallback(() => {
    setIsLoading(true);
  }, []);

  return (
    <Container>
      <StatusBar style="auto" />

      {isLoading && <Loading />}

      <PressContainer onPress={onPress}>
        <StyledText>press</StyledText>
      </PressContainer>
    </Container>
  );
};

export default memo(App);
