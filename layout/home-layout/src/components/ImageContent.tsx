import React, { memo } from 'react';
import styled from '@emotion/native';

const Container = styled.View({
  flex: 1,
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: 10,
});

const TextContainer = styled.View({
  flex: 1,
  width: '100%',
  height: '100%',
  flexDirection: 'column',
  alignItems: 'flex-end',
});

const StyledText = styled.Text({
  fontSize: 18,
  color: '#fff',
  marginRight: 30,
});

const Circle = styled.Image({
  width: 50,
  height: 50,
  borderRadius: 50 / 2,
  marginLeft: 25,
});

const ImageContent = () => {
  return (
    <Container>
      <Circle source={require('./assets/logo.png')} />

      <TextContainer>
        <StyledText>What course would you like</StyledText>
        <StyledText>to take for React Native?</StyledText>
      </TextContainer>
    </Container>
  );
};

export default memo(ImageContent);
