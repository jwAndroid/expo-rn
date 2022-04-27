import { memo } from 'react';
import styled from '@emotion/native';
import { Text } from 'react-native';

const Container = styled.View({
  flex: 1,
});

const App = () => {
  return (
    <Container>
      <Text>kakao-clone</Text>
    </Container>
  );
};

export default memo(App);
