import React, { memo } from 'react';
import styled from '@emotion/native';
import { TouchableHighlight } from 'react-native';

const Container = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#303030',
});

const Logo = styled.Image({
  width: '100%',
  height: 80,
});

const Divider = styled.View({
  width: '100%',
  height: 1,
  backgroundColor: '#fff',
});

const App = () => {
  return (
    <Container>
      <TouchableHighlight onPress={() => console.log('click!')}>
        <Logo source={require('./assets/splash-logo.gif')} />
      </TouchableHighlight>
    </Container>
  );
};

export default memo(App);
