import React, { memo } from 'react';
import styled from '@emotion/native';
import { TouchableHighlight } from 'react-native';

const Container = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#303030',
});

const GifImage = styled.Image({
  width: 360,
  height: 360,
});

const App = () => {
  return (
    <Container>
      <TouchableHighlight onPress={() => console.log('click!')}>
        <GifImage source={require('./assets/test.gif')} />
      </TouchableHighlight>
    </Container>
  );
};

export default memo(App);
