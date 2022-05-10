import { memo } from 'react';
import { Text, View } from 'react-native';

const Profile = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>프로필 스크린</Text>
    </View>
  );
};

export default memo(Profile);
