import React, { memo, useCallback, useState } from 'react';
import { Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import styled from '@emotion/native';

const Container = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledText = styled.Text({
  fontSize: 18,
  color: 'blue',
});

const images = [
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaPl62RIAOU_-rP1DxP6tC-mcg8GdMoHk23A&usqp=CAU',
  },
  {
    url: 'https://3.bp.blogspot.com/-x4gLW4b7sB4/XHE3SYQbIpI/AAAAAAAA4nM/SFGGsj7HgyELAWCFQfanqqQwwBJfg30YACLcBGAs/s1600/01.jpg',
  },
  { url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460' },
  {
    url: 'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/cnoC/image/8Ql-wYAJmiMkSg4gvS6zhMewDg4.JPEG',
  },
];

const App = () => {
  const [visible, setVisible] = useState(true);

  const onPress = useCallback(() => setVisible(true), []);

  const renderIndicator = useCallback((currentIndex) => {
    return <StyledText>{currentIndex}</StyledText>;
  }, []);

  const renderFooter = useCallback(() => {
    return <StyledText>123</StyledText>;
  }, []);

  return (
    <Container>
      <Modal visible={visible} transparent animationType="fade">
        <ImageViewer
          imageUrls={images}
          enableImageZoom
          enableSwipeDown
          backgroundColor="#e0e0e0"
          onSwipeDown={() => {
            setVisible(false);
          }}
          enablePreload
          renderIndicator={renderIndicator}
          renderFooter={renderFooter}
          swipeDownThreshold={3}
        />
      </Modal>

      <StyledText onPress={onPress}>시작</StyledText>
    </Container>
  );
};

export default memo(App);
