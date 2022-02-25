import styled from '@emotion/native';
import React, { memo, useCallback, useEffect, useState } from 'react';
import {
  StatusBar,
  FlatList,
  Image,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
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

const IMAGE_SIZE = 80;
const SPACING = 10;

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
      console.log(images);
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
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
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

      <FlatList
        data={images}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={{ position: 'absolute', bottom: IMAGE_SIZE }}
        contentContainerStyle={{ padding: SPACING }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <Image
                source={{ uri: item.src.landscape }}
                style={{
                  width: IMAGE_SIZE,
                  height: IMAGE_SIZE,
                  borderRadius: 12,
                  marginRight: SPACING,
                  borderWidth: 2,
                }}
              />
            </TouchableOpacity>
          );
        }}
      />
    </Container>
  );
};

export default memo(App);
