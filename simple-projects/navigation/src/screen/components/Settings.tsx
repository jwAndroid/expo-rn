import { memo } from 'react';
import { Text, View } from 'react-native';

const Settings = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>세팅 스크린</Text>
    </View>
  );
};

export default memo(Settings);
