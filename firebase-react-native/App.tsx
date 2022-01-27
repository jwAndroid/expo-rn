import { memo, useCallback, useEffect, useState } from 'react';
import styled from '@emotion/native';

// install firebase sdk , database , GA

const Container = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledText = styled.Text({
  fontSize: 16,
  color: '#303030',
});

const App = () => {
  const [value, setValue] = useState('TEST');

  useEffect(() => {
    console.log(value);
  }, [value]);

  const onPress = useCallback(() => {
    setValue('set!');

    console.log(value);
  }, [value]);

  return (
    <Container>
      <StyledText onPress={onPress}>hello world</StyledText>
    </Container>
  );
};

export default memo(App);
