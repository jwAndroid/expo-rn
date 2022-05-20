import React, { memo, useCallback } from 'react';
import { Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { manipulateAsync } from 'expo-image-manipulator';
import styled from '@emotion/native';

const Container = styled.View({
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledText = styled.Text({
  fontSize: 18,
  color: '#303030',
});

const IMAGE_URI =
  'https://static.wikia.nocookie.net/pokemon/images/5/52/%ED%94%BC%EC%B9%B4%EC%B8%84_%EA%B3%B5%EC%8B%9D_%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8.png/revision/latest?cb=20170405000019&path-prefix=ko';

const App = () => {
  const onPressManipulate = useCallback(async () => {
    const result = await manipulateAsync(IMAGE_URI);

    console.log(result);
  }, []);

  // const onPressImage = useCallback(() => {
  //   Image.getSize(IMAGE_URI, (width, height) => {
  //     console.log({ width, height });
  //   });
  // }, []);

  return (
    <Container>
      <StatusBar style="auto" />

      <StyledText onPress={onPressManipulate}>getSize</StyledText>
    </Container>
  );
};

export default memo(App);
