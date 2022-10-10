import React, { memo, useCallback, useState } from 'react';
import { Switch } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styled from '@emotion/native';
import { ThemeProvider } from '@emotion/react';

import { darkTheme, lightTheme } from './src/components/theme';
import { Button } from './src/components';

// emotion
const Container = styled.View({
  flex: 1,
  backgroundColor: '#303030',
  alignItems: 'center',
  justifyContent: 'center',
});

const App = () => {
  const [isDark, setIsDark] = useState(false);

  const onValueChange = useCallback((value: boolean) => {
    setIsDark(value);
  }, []);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Container>
        <StatusBar style="auto" />

        <Switch value={isDark} onValueChange={onValueChange} />

        <Button isActive={false}>asd</Button>
      </Container>
    </ThemeProvider>
  );
};

// ThemeProvider 는 context 기본적으로 있는거고 , 중앙저장소라고 생각하면된다
// 그리고 가장 중요한건 당연히 최상위 컴포넌트인 app.tsx에 해준다.
// 최상위 컴포넌트에서 ThemeProvider 하면 자식컴포넌트에는 모두 쓸수있다 Button 에서 theme 을 불러서 사용한다.
// 다크모드에서 어떻게 버튼이나 색이나 어떻게 영향을 받냐? theme={darkTheme} 에서 영향을 준다는것

/*
const Container = styled.View({
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
});

로 이렇게 쓸수있고 container:  를 변수처럼 써서
    <Container>
      <StatusBar style="auto" />
    </Container> 로 감쌀수 있다는것

이제 style={styles.container} 를 안해줘도 된다.

그리고 styled 뒤에 View 는  <Container> 얘 전에 View를 썻으니까 써준것

이런식으로 작성한다.
*/

/*
 Context

*/
export default memo(App);
