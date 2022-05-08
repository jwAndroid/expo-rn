import { memo } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Tab from './Tab';

const Navigation = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="default" />

      <Tab />
    </NavigationContainer>
  );
};

export default memo(Navigation);
