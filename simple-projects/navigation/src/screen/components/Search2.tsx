import { useNavigation } from '@react-navigation/native';
import { memo, useCallback } from 'react';
import { Text, View } from 'react-native';
import { Search2ScreenNavigationProp } from '../MailStack';

const Search2 = () => {
  const navigation = useNavigation<Search2ScreenNavigationProp>();

  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onReset = useCallback(() => {
    navigation.reset({ routes: [{ name: 'Mail' }] });
  }, [navigation]);

  const onGoScreen = useCallback(() => {
    navigation.navigate('Profile');
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ color: '#fff', fontSize: 30, marginBottom: 30 }}>
        서치 2 스크린
      </Text>

      <Text
        onPress={onBack}
        style={{ color: 'yellow', fontSize: 30, marginBottom: 30 }}
      >
        뒤로가기
      </Text>

      <Text
        onPress={onReset}
        style={{ color: '#fff', fontSize: 30, marginBottom: 30 }}
      >
        초기화면 이동
      </Text>

      <Text
        onPress={onGoScreen}
        style={{ color: '#fff', fontSize: 30, marginBottom: 30 }}
      >
        특정 스택 이동
      </Text>
    </View>
  );
};

export default memo(Search2);
