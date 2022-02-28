import styled from '@emotion/native';
import { memo, useCallback, useState } from 'react';

import { TabButton } from '../components/button';
import { BaseContainer } from '../components/layout';

const Container = styled.View({
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
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
      <Container>
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
      </Container>
    </BaseContainer>
  );
};

export default memo(Main);
