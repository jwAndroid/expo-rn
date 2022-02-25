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

const StyledText = styled.Text({
  fontSize: 17,
  color: '#303030',
});

const App = () => {
  const [selectedImage, setSelectedImage] = useState({ uri: '' });

  useEffect(() => {
    (async () => {
      await MediaLibrary.requestPermissionsAsync();
    })();
  }, []);

  const onPress = useCallback(async () => {
    const assetLists = await MediaLibrary.getAssetsAsync();
    assetLists.assets.map((item) => console.log(item));
    setSelectedImage({ uri: assetLists.assets[1].uri });

    console.log(assetLists.assets[0].uri);
    console.log(selectedImage);
  }, [selectedImage]);

  return (
    <Container>
      <StatusBar style="auto" />
      <StyledText onPress={onPress}>press</StyledText>
    </Container>
  );
};

export default memo(App);
