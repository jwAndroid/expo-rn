import { memo } from 'react';
import { View } from 'react-native';

const Header = () => {
  return (
    <View style={{ width: '100%', height: 60, backgroundColor: 'yellow' }} />
  );
};

export default memo(Header);
