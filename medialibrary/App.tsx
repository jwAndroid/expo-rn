import React, { memo, useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from '@emotion/native';
import * as MediaLibrary from 'expo-media-library';

const Container = styled.View({
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
});

const App = () => {
  const [selectedImage, setSelectedImage] = useState({ uri: '' });

  useEffect(() => {
    (async () => {
      await MediaLibrary.requestPermissionsAsync();
    })();
  }, []);

  const getAlbum = useCallback(async () => {
    const assetLists = await MediaLibrary.getAssetsAsync();

    assetLists.assets.map((item) => console.log(item));

    setSelectedImage({ uri: assetLists.assets[1].uri });
    console.log(assetLists.assets[0].uri);
  }, []);

  return (
    <Container>
      <StatusBar style="auto" />
    </Container>
  );
};

export default memo(App);
