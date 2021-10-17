import styled from '@emotion/native';
import React, { memo, useCallback, useEffect, useState } from 'react';
import {
  StatusBar,
  FlatList,
  Image,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Easing,
  SafeAreaViewBase,
  SafeAreaView,
} from 'react-native';

import { API_KEY, API_URL } from './src/apiKey';

const { width, height } = Dimensions.get('screen');

const Container = styled.View({
  flex: 1,
  backgroundColor: '#303030',
});

const Loading = styled.Text({
  fontSize: 18,
});

const App = () => {
  const [images, setImages] = useState(null);

  const fetchImagesFromPexels = useCallback(async () => {
    const data = await fetch(API_URL, { headers: { Authorization: API_KEY } });
    const { photos } = await data.json();

    return photos;
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      const images = await fetchImagesFromPexels();
      console.log(images);
    };

    fetchImages();
  });

  if (!images) {
    return null;
  }

  return (
    <Container>
      <StatusBar hidden />
      <Loading>Loading...</Loading>
    </Container>
  );
};

export default memo(App);
