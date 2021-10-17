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
  backgroundColor: '#fff',
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
      setImages(images);
    };

    fetchImages();
  }, [fetchImagesFromPexels]);

  return (
    <Container>
      <StatusBar hidden />

      {!images && <Loading>Loading...</Loading>}

      <FlatList
        data={images}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={{ width, height }}>
              <Image
                source={{ uri: item.src.landscape }}
                style={[StyleSheet.absoluteFillObject]}
              />
            </View>
          );
        }}
      />
    </Container>
  );
};

export default memo(App);
