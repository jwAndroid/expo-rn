import React, { memo } from 'react';
import { Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import styled from '@emotion/native';

const Container = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

const images = [
  { url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460' },
  { url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460' },
  { url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460' },
  { url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460' },
];

const App = () => {
  return (
    <Container>
      <Modal visible transparent>
        <ImageViewer imageUrls={images} />
      </Modal>
    </Container>
  );
};

export default memo(App);
