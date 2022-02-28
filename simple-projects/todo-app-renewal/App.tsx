import { memo, useCallback, useMemo, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@emotion/react';

import { lightTheme } from './src/theme';
import { Splash } from './src/screen';
import Navigation from './src/navigation/Navigation';

const App = () => {
  const [isComplete, setIsComplete] = useState(false);

  const theme = useMemo(() => lightTheme, []);

  const onComplete = useCallback(() => {
    setIsComplete(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StatusBar />

      {isComplete ? <Navigation /> : <Splash onComplete={onComplete} />}
    </ThemeProvider>
  );
};
export default memo(App);
