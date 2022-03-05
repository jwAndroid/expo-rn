import { FC, memo, useCallback, useState } from 'react';
import AppLoading from 'expo-app-loading';

import SplashScreen from './SplashScreen';

interface ISplash {
  onComplete: (isComplete: boolean) => void;
}

const AppReady: FC<ISplash> = ({ onComplete }) => {
  const [isPreloading, setIsPreloading] = useState(false);

  const startAsync = useCallback(async () => {
    await Promise.all<any>([]);
  }, []);

  const onFinish = useCallback(async () => {
    setIsPreloading(true);

    await new Promise((resolve) => {
      setTimeout(resolve, 0);
    });

    onComplete(true);
  }, [onComplete]);

  return isPreloading ? (
    <SplashScreen />
  ) : (
    <AppLoading
      startAsync={startAsync}
      onFinish={onFinish}
      onError={console.warn}
    />
  );
};

export default memo(AppReady);
