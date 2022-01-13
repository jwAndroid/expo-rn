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
  backgroundColor: '#303030',
});

const StyledImage = styled.Image({
  flex: 1,
});

const images = [
  'https://cdn.notefolio.net/img/d7/5b/d75bf02e2a35f76dba6ed5eeccde793c45d74edd83df838e31290603ceb5c5c9_v1.jpg',
  'https://t1.daumcdn.net/cfile/tistory/99086B3C5B9B75C431',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSML9Cd9WTepU94wqlWzAGSyKTMXn2Iy1uWAm4cgyjEoseCv50xdo_tIk_fgzN04cd0IqA&usqp=CAU',
  'https://ai-s2.infcdn.net/screenshots_siandroid/1/16619/16619887_1.jpg',
];

const App = () => {
  const renderItem = useCallback(({ item }) => {
    return <StyledImage source={{ uri: item }} />;
  }, []);

  // const renderItem = useCallback(({ item }) => {
  //   return (
  //     <ImageZoom
  //       cropWidth={Dimensions.get('window').width}
  //       cropHeight={Dimensions.get('window').height}
  //       imageWidth={200}
  //       imageHeight={200}
  //       enableSwipeDown
  //       onSwipeDown={() => {
  //         console.log('down');
  //       }}
  //     >
  //       <ImageContainer>
  //         <StyledImage source={{ uri: item }} resizeMode="center" />
  //       </ImageContainer>
  //     </ImageZoom>
  //   );
  // }, []);

  return (
    <Container>
      <StatusBar style="auto" />

      <Carousel
        sliderWidth={400}
        itemWidth={400}
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
        autoplay
        lockScrollWhileSnapping
        autoplayInterval={5000}
        loop
        loopClonesPerSide={3}
        data={images}
        renderItem={renderItem}
      />
    </Container>
  );
};

export default memo(App);
