import { memo, useCallback } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { TestType } from '../../type';
import { MailScreenNavigationProp } from '../MailStack';

const data: TestType = { id: 1, text: '네비게이션 공부하는 지웅이' };

const text = '데이터 담아서 \n서치 스크린 이동';

const Mail = () => {
  const navigation = useNavigation<MailScreenNavigationProp>();

  const onPress = useCallback(() => {
    navigation.navigate('Search', data);
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text onPress={onPress}>{text}</Text>
    </View>
  );
};

export default memo(Mail);
