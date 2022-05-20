import { memo } from 'react';
import styled from '@emotion/native';
import { Text } from 'react-native';

const Container = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

const App = () => {
  return (
    <Container>
      <Text>h1</Text>
    </Container>
  );
};

export default memo(App);
