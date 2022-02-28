import { memo, useMemo } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from '@emotion/react';

import { BaseContainer, SafeAreaContainer } from './src/components/layout';
import { StyledText } from './src/components/text';
import { lightTheme } from './src/theme';

const App = () => {
  const theme = useMemo(() => lightTheme, []);

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaContainer>
        <BaseContainer>
          <StatusBar />

          <StyledText>ㅅㅂ</StyledText>
        </BaseContainer>
      </SafeAreaContainer>
    </ThemeProvider>
  );
};
export default memo(App);
