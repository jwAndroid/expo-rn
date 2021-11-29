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
  {
    url: 'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/cnoC/image/8Ql-wYAJmiMkSg4gvS6zhMewDg4.JPEG',
  },
  { url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460' },
  {
    url: 'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/cnoC/image/8Ql-wYAJmiMkSg4gvS6zhMewDg4.JPEG',
  },
];

const App = () => {
  return (
    <Container>
      <Modal visible transparent>
        <ImageViewer
          imageUrls={images}
          enableImageZoom
          enableSwipeDown
          onSwipeDown={() => {
            console.log('onSwipeDown');
          }}
        />
      </Modal>
    </Container>
  );
};

export default memo(App);
