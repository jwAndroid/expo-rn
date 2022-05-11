import { useNavigation } from '@react-navigation/native';
import { memo, useCallback } from 'react';
import { Text, View } from 'react-native';
import { ProfileScreenNavigationProp } from '../ProfileStack';

const Profile = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const onPress = useCallback(() => {
    navigation.navigate('Room');
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>프로필 스크린</Text>

      <Text onPress={onPress} style={{ fontSize: 30, color: 'blue' }}>
        채팅방으로 이동
      </Text>
    </View>
  );
};

export default memo(Profile);
