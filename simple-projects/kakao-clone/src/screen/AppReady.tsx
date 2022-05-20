import { FC, memo, useCallback, useState } from 'react';
import AppLoading from 'expo-app-loading';

import { icon, font } from '../theme';
import { cacheFonts, cacheImages } from '../api/cache';
import SplashScreen from './SplashScreen';

interface IAppReady {
  onComplete: (isCompleate: boolean) => void;
}

const AppReady: FC<IAppReady> = ({ onComplete }) => {
  const [isPreloading, setIsPreloading] = useState(false);

  const startAsync = useCallback(async () => {
    await Promise.all<any>([cacheFonts(font), ...cacheImages(icon)]).then(
      (result) => {
        console.log(result);
      }
    );
  }, []);

  const onFinish = useCallback(async () => {
    setIsPreloading(true);

    await new Promise((resolve) => {
      setTimeout(resolve, 3000);
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
