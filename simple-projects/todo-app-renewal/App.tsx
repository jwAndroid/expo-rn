import { memo, useCallback, useMemo, useState } from 'react';
import { ThemeProvider } from '@emotion/react';

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
      {isComplete ? <Navigation /> : <AppReady onComplete={onComplete} />}
    </ThemeProvider>
  );
};
export default memo(App);
