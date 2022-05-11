import { memo } from 'react';
import { LogBox, StatusBar } from 'react-native';
import { Navigation } from './src/navigation';

LogBox.ignoreLogs(['EventEmitter.removeListener']);

const App = () => {
  return (
    <>
      <StatusBar barStyle="default" />

      <Navigation />
    </>
  );
};

export default memo(App);
