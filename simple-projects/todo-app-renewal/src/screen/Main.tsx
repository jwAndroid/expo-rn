import { memo, useCallback, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from '@emotion/native';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { RecycleBin, Todo } from './components';
import { TabButton } from '../components/button';
import { StyledInput } from '../components/input';
import { SafeAreaContainer } from '../components/layout';

const ScreenContainer = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.background,
}));

const TabBarContainer = styled.View({
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

const image1 = {
  uri: 'https://cdn-icons-png.flaticon.com/512/1891/1891667.png',
};

const image2 = {
  uri: 'https://imgc.1300k.com/aaaaaib/goods/215025/99/215025995432.jpg?3',
};

const Main = () => {
  const [isTodo, setIsTodo] = useState(true);

  const onPressTodo = useCallback(() => {
    setIsTodo(true);
  }, []);

  const onPressRecycleBin = useCallback(() => {
    setIsTodo(false);
  }, []);

  return (
    <SafeAreaContainer>
      <StatusBar style="dark" />

      <TabBarContainer>
        <TabButton source={image1} onPress={onPressTodo} />
        <TabButton source={image2} onPress={onPressRecycleBin} />
      </TabBarContainer>

      <ScreenContainer>{isTodo ? <Todo /> : <RecycleBin />}</ScreenContainer>

      {isTodo ? (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <StyledInput />
        </KeyboardAvoidingView>
      ) : undefined}
    </SafeAreaContainer>
  );
};

export default memo(Main);
