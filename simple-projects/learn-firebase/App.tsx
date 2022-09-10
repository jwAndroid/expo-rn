import { memo } from 'react';

import Pagination2 from './src/components/Pagination2';
import { Container } from './src/style/MyStyle';

const App = () => {
  return (
    <Container>
      <Pagination2 />
    </Container>
  );
};

export default memo(App);
