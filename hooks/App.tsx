import React, { memo, useCallback, useState, useMemo, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from '@emotion/native';

const Container = styled.View({
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledButton = styled.Pressable({
  paddingHorizontal: 50,
  paddingVertical: 10,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderRadius: 8,
  marginTop: 20,
});

const StyledText = styled.Text({
  fontSize: 16,
  color: '#fff',
});

const StyledImage = styled.Image({
  width: '100%',
  height: '50%',
});

const IMAGE_URL = 'https://pbs.twimg.com/media/ERcXkipUEAAzu-q.jpg';

const PLACE_HOLDER =
  'https://nkdi.kr/wp-content/themes/fox/images/placeholder.jpg';

const App = () => {
  const [image, setImage] = useState(IMAGE_URL);

  useEffect(() => {
    setImage(IMAGE_URL);
  }, []);

  const source = useMemo(() => {
    return { uri: image };
  }, [image]);

  const onPress = useCallback(() => {
    setImage(IMAGE_URL);
  }, []);

  const onPressPlaceHolder = useCallback(() => {
    setImage(PLACE_HOLDER);
  }, []);

  return (
    <Container>
      <StatusBar style="auto" />

      <StyledImage source={source} />

      <StyledButton onPress={onPressPlaceHolder}>
        <StyledText>Place holder</StyledText>
      </StyledButton>

      <StyledButton onPress={onPress}>
        <StyledText>Image</StyledText>
      </StyledButton>
    </Container>
  );
};

export default memo(App);
