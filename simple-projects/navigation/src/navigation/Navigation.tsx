import { memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Tab from './Tab';

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab />
    </NavigationContainer>
  );
};

export default memo(Navigation);
