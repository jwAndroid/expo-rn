import { memo, useCallback, useState } from 'react';
import styled from '@emotion/native';

import { BaseContainer } from '../components/layout';
import { RecycleBin, Todo } from './components';
import { TabButton } from '../components/button';

const TabContainer = styled.View({
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

const ContentContainer = styled.View(({ theme }) => ({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.background,
}));

const Main = () => {
  const [isActive, setIsActive] = useState(true);
  const [isTodoScreen, setIsTodoScreen] = useState(true);

  const toDoOnPress = useCallback(() => {
    setIsActive((prev) => !prev);

    setIsTodoScreen(true);
  }, []);

  const recycleBinOnPress = useCallback(() => {
    setIsActive(false);

    setIsTodoScreen((prev) => !prev);
  }, []);

  return (
    <BaseContainer>
      <TabContainer>
        <TabButton
          isActive={isActive}
          buttonTextSize={18}
          buttonTextColor="#fff"
          onPress={toDoOnPress}
        >
          ToDo
        </TabButton>

        <TabButton
          isActive={!isActive}
          buttonTextSize={18}
          buttonTextColor="#fff"
          onPress={recycleBinOnPress}
        >
          RecycleBin
        </TabButton>
      </TabContainer>

      <ContentContainer>
        {isTodoScreen ? <Todo /> : <RecycleBin />}
      </ContentContainer>
    </BaseContainer>
  );
};

export default memo(Main);
