import { memo } from 'react';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';

import { Header, StyledText } from '../components/common';
import { SafeAreaContainer } from '../components/layout';

const Container = styled.View(() => ({
  flex: 1,
}));

const Users = () => {
  const theme = useTheme();

  return (
    <SafeAreaContainer>
      <Header
        title="친구"
        one={theme.icon.search}
        two={theme.icon.users}
        three={theme.icon.music}
        four={theme.icon.headersetting}
      />

      <Container>
        <StyledText>asd</StyledText>
      </Container>
    </SafeAreaContainer>
  );
};

export default memo(Users);
