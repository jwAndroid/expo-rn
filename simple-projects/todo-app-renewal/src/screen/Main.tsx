import { memo, useCallback, useState } from 'react';
import styled from '@emotion/native';

import { FloatingButton, TabButton } from '../components/button';
import { BaseContainer } from '../components/layout';
import { StyledText } from '../components/text';

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

  const work = useCallback(() => {
    setIsActive((prev) => !prev);
  }, []);

  const travel = useCallback(() => {
    setIsActive(false);
  }, []);

  const onPress = useCallback(() => {
    console.log('FloatingOnPress');
  }, []);

  return (
    <BaseContainer>
      <TabContainer>
        <TabButton
          isActive={isActive}
          buttonTextSize={18}
          buttonTextColor="#fff"
          onPress={work}
        >
          work
        </TabButton>

        <TabButton
          isActive={!isActive}
          buttonTextSize={18}
          buttonTextColor="#fff"
          onPress={travel}
        >
          travel
        </TabButton>
      </TabContainer>

      <ContentContainer>
        <StyledText fontSize={24} color="#fff">
          Contents
        </StyledText>
      </ContentContainer>

      <FloatingButton onPress={onPress} />
    </BaseContainer>
  );
};

export default memo(Main);
