import React, { memo, useCallback, useState } from 'react';
import styled from '@emotion/native';

const Container = styled.View({
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
});

const TextView = styled.Text({
  fontSize: 48,
  color: '#000000',
});

const App = () => {
  const [data, setData] = useState<Number[]>([]);

  const onPress = useCallback(() => {
    const item = 10;

    setData([item, ...data]);

    console.log(data);
  }, []);

  return (
    <Container>
      <TextView onPress={onPress}>+</TextView>
    </Container>
  );
};

export default memo(App);
