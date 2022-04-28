import { memo } from 'react';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';

const SplashContainer = styled.View(({ theme }) => ({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.color.yellow,
}));

const Logo = styled.Image(() => ({
  width: 100,
  height: 100,
}));

const SplashScreen = () => {
  const theme = useTheme();

  return (
    <SplashContainer>
      <Logo source={theme.icon.kakao} />
    </SplashContainer>
  );
};

export default memo(SplashScreen);
