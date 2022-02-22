import { memo, useCallback } from 'react';
import styled from '@emotion/native';

import StyledText from './src/components/StyledText';

const Container = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

const App = () => {
  const onPress = useCallback(() => {
    console.log('asd');
  }, []);

  return (
    <Container>
      <StyledText onPress={onPress} fontSize={16} color="#303030">
        hello react native
      </StyledText>
    </Container>
  );
};

export default memo(App);
