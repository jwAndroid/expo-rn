import { memo } from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';

import { BaseContainer } from '../components/layout';

const SplashImage = styled.Image({
  width: 100,
  height: 100,
});

const SplashScreen = () => {
  const theme = useTheme();

  return (
    <BaseContainer>
      <SplashImage source={theme.icon.check} />
    </BaseContainer>
  );
};

export default memo(SplashScreen);
