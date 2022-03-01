import { memo, useCallback, useState } from 'react';
import styled from '@emotion/native';

import { FloatingButton, TabButton } from '../components/button';
import { BaseContainer } from '../components/layout';
import { RecycleBin, Todo } from './components';
import { InputModal } from '../components/modal';

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
  const [isOpen, setIsOpen] = useState(false);

  const toDoOnPress = useCallback(() => {
    setIsActive((prev) => !prev);

    setIsTodoScreen(true);
  }, []);

  const recycleBinOnPress = useCallback(() => {
    setIsActive(false);

    setIsTodoScreen((prev) => !prev);
  }, []);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onPress = useCallback(() => {
    setIsOpen(true);
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

      <FloatingButton onPress={onPress} />

      <InputModal isOpen={isOpen} onClose={onClose} />
    </BaseContainer>
  );
};

export default memo(Main);
