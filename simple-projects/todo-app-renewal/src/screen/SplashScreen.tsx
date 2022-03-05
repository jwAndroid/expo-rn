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
      uri: 'https://i.pinimg.com/474x/f5/6c/13/f56c13a6edcb1171eb0b6dbc5276b71a--ios-ui-ui-ux.jpg',
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
