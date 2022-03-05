import { memo, useCallback, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from '@emotion/native';

import { BaseContainer } from '../components/layout';
import { RecycleBin, Todo } from './components';
import { TabButton } from '../components/button';
import { View } from 'react-native';

const TabContainer = styled.View({
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
  const [isTodoScreen, setIsTodoScreen] = useState(true);

  const toDoOnPress = useCallback(() => {
    setIsTodoScreen(true);
  }, []);

  const recycleBinOnPress = useCallback(() => {
    setIsTodoScreen(false);
  }, []);

  return (
    <BaseContainer>
      <StatusBar style="dark" />

      {isTodoScreen ? <Todo /> : <RecycleBin />}
    </BaseContainer>
  );
};

export default memo(Main);
