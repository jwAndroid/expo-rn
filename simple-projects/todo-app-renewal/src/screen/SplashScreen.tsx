import { memo, useMemo } from 'react';
import { Dimensions } from 'react-native';
import styled from '@emotion/native';

import { BaseContainer } from '../components/layout';

const SplashImage = styled.Image({
  width: '100%',
  height: Dimensions.get('window').height,
});

const SplashScreen = () => {
  const uri = useMemo(
    () => ({
      uri: 'https://imgc.1300k.com/aaaaaib/goods/215025/99/215025995432.jpg?3',
    }),
    []
  );

  return (
    <BaseContainer>
      <SplashImage source={uri} />
    </BaseContainer>
  );
};

export default memo(SplashScreen);
