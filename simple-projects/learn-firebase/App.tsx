import { memo } from 'react';

import Storage from './src/components/Storage';
import { Container } from './src/style/MyStyle';

const App = () => {
  return (
    <Container>
      <Storage />
    </Container>
  );
};

export default memo(App);
