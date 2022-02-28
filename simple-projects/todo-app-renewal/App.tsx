import { memo, useCallback, useMemo, useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { StatusBar } from 'expo-status-bar';

import { lightTheme } from './src/theme';
import { AppReady } from './src/screen';
import Navigation from './src/navigation/Navigation';

const App = () => {
  const [isComplete, setIsComplete] = useState(false);

  const theme = useMemo(() => lightTheme, []);

  const onComplete = useCallback(() => {
    setIsComplete(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" backgroundColor={theme.color.black} />

      {isComplete ? <Navigation /> : <AppReady onComplete={onComplete} />}
    </ThemeProvider>
  );
};
export default memo(App);
