import React, { memo, useCallback, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Carousel from 'react-native-snap-carousel';
import styled from '@emotion/native';

const Container = styled.View({
  flex: 1,
  backgroundColor: '#303030',
});

const StyledImage = styled.Image({
  flex: 1,
});

const App = () => {
  const [images, setImages] = useState([
    'https://static.wikia.nocookie.net/pokemon/images/5/52/%ED%94%BC%EC%B9%B4%EC%B8%84_%EA%B3%B5%EC%8B%9D_%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8.png/revision/latest?cb=20170405000019&path-prefix=ko',
    'https://static.wikia.nocookie.net/pokemon/images/5/52/%ED%94%BC%EC%B9%B4%EC%B8%84_%EA%B3%B5%EC%8B%9D_%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8.png/revision/latest?cb=20170405000019&path-prefix=ko',
    'https://static.wikia.nocookie.net/pokemon/images/5/52/%ED%94%BC%EC%B9%B4%EC%B8%84_%EA%B3%B5%EC%8B%9D_%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8.png/revision/latest?cb=20170405000019&path-prefix=ko',
    'https://static.wikia.nocookie.net/pokemon/images/5/52/%ED%94%BC%EC%B9%B4%EC%B8%84_%EA%B3%B5%EC%8B%9D_%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8.png/revision/latest?cb=20170405000019&path-prefix=ko',
  ]);

  const renderItem = useCallback(({ item }) => {
    return <StyledImage source={{ uri: item }} resizeMode="contain" />;
  }, []);

  return (
    <Container>
      <StatusBar style="auto" />

      <Carousel
        sliderWidth={200}
        itemWidth={200}
        firstItem={1}
        data={images}
        renderItem={renderItem}
      />
    </Container>
  );
};

export default memo(App);
