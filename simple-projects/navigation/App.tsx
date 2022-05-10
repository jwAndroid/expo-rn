import { memo } from 'react';
import { StatusBar } from 'react-native';
import { Navigation } from './src/navigation';

const App = () => {
  return (
    <>
      <StatusBar barStyle="default" />

      <Navigation />
    </>
  );
};

export default memo(App);
