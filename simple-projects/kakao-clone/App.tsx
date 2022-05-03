import { memo, useCallback, useMemo, useState } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from '@emotion/react';

import { Navigation } from './src/navigation';
import { lightTheme } from './src/theme';
import { AppReady } from './src/screen';

const App = () => {
  const [isCompleate, setIsCompleate] = useState(false);

  const theme = useMemo(() => lightTheme, []);

  const onComplete = useCallback(() => {
    setIsCompleate(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" />

      {isCompleate ? <Navigation /> : <AppReady onComplete={onComplete} />}
    </ThemeProvider>
  );
};

export default memo(App);
