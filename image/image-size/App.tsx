import React, { memo } from 'react';
import styled from '@emotion/native';
import { StatusBar } from 'expo-status-bar';
import ImageSize from 'react-native-image-size';

const Container = styled.View({
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
});

// ImageSize.getSize(
//   'https://static.wikia.nocookie.net/pokemon/images/5/52/%ED%94%BC%EC%B9%B4%EC%B8%84_%EA%B3%B5%EC%8B%9D_%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8.png/revision/latest?cb=20170405000019&path-prefix=ko'
// ).then((size) => {
//   console.log(size.height);
//   console.log(size.width);
// });

const App = () => {
  return (
    <Container>
      <StatusBar style="auto" />
    </Container>
  );
};

export default memo(App);
