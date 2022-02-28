import styled from '@emotion/native';
import { memo, useCallback, useState } from 'react';
import { Text } from 'react-native';

import { TabButton } from '../components/button';
import { BaseContainer } from '../components/layout';
import { StyledText } from '../components/text';

const TabContainer = styled.View({
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

const ContentContainer = styled.View({
  flex: 1,
  backgroundColor: '#303030',
  justifyContent: 'center',
  alignItems: 'center',
});

const Main = () => {
  const [isActive, setIsActive] = useState(true);

  const work = useCallback(() => {
    setIsActive((prev) => !prev);
  }, []);

  const travel = useCallback(() => {
    setIsActive(false);
  }, []);

  return (
    <BaseContainer>
      <TabContainer>
        <TabButton
          isActive={isActive}
          buttonTextSize={18}
          buttonTextColor="#fff"
          marginTop={10}
          onPress={work}
        >
          work
        </TabButton>

        <TabButton
          isActive={!isActive}
          buttonTextSize={18}
          buttonTextColor="#fff"
          marginTop={10}
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
    </BaseContainer>
  );
};

export default memo(Main);
