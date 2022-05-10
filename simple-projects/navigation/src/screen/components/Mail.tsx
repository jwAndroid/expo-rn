import { useNavigation } from '@react-navigation/native';
import { memo, useCallback } from 'react';
import { Text, View } from 'react-native';
import { MailScreenNavigationProp } from '../MailStack';

// const data = '네비게이션 공부하는 지웅이';

const Mail = () => {
  const navigation = useNavigation<MailScreenNavigationProp>();

  const onPress = useCallback(() => {
    navigation.navigate('Search');
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text onPress={onPress}>서치 스크린 이동</Text>
    </View>
  );
};

export default memo(Mail);
