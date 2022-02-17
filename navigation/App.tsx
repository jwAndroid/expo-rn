import React, { memo } from 'react';
import { StatusBar } from 'expo-status-bar';

import { Stack } from './src/navigation';

const App = () => {
  return (
    <>
      <StatusBar style="auto" />

      <Stack />
    </>
  );
};

export default memo(App);
