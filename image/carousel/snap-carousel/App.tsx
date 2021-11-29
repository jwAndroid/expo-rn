import React, { memo, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import ImageZoom from 'react-native-image-pan-zoom';
import styled from '@emotion/native';

const Container = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

const ImageContainer = styled.View({
  flex: 1,
  backgroundColor: '#303030',
});

const StyledImage = styled.Image({
  flex: 1,
});

const images = [
  'https://static.wikia.nocookie.net/pokemon/images/5/52/%ED%94%BC%EC%B9%B4%EC%B8%84_%EA%B3%B5%EC%8B%9D_%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8.png/revision/latest?cb=20170405000019&path-prefix=ko',
  'https://static.wikia.nocookie.net/pokemon/images/5/52/%ED%94%BC%EC%B9%B4%EC%B8%84_%EA%B3%B5%EC%8B%9D_%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8.png/revision/latest?cb=20170405000019&path-prefix=ko',
  'https://static.wikia.nocookie.net/pokemon/images/5/52/%ED%94%BC%EC%B9%B4%EC%B8%84_%EA%B3%B5%EC%8B%9D_%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8.png/revision/latest?cb=20170405000019&path-prefix=ko',
  'https://static.wikia.nocookie.net/pokemon/images/5/52/%ED%94%BC%EC%B9%B4%EC%B8%84_%EA%B3%B5%EC%8B%9D_%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8.png/revision/latest?cb=20170405000019&path-prefix=ko',
];

const App = () => {
  const renderItem = useCallback(({ item }) => {
    return (
      <ImageZoom
        cropWidth={Dimensions.get('window').width}
        cropHeight={Dimensions.get('window').height}
        imageWidth={200}
        imageHeight={200}
        enableSwipeDown
        onSwipeDown={() => {
          console.log('down');
        }}
      >
        <ImageContainer>
          <StyledImage source={{ uri: item }} resizeMode="center" />
        </ImageContainer>
      </ImageZoom>
    );
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
