import { memo, useCallback, useMemo, useState } from 'react';
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
      {isCompleate ? <Navigation /> : <AppReady onComplete={onComplete} />}
    </ThemeProvider>
  );
};

export default memo(App);
