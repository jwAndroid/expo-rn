import { useNavigation } from '@react-navigation/native';
import { memo, useCallback } from 'react';

import Button from '../components/common/Button';
import Text from '../components/common/Text';
import SafeAreaContainer from '../components/layout/SafeAreaContainer';
import { ChatScreenNavigationProp } from '../navigation/Stack';

const Chat = () => {
  const navigation = useNavigation<ChatScreenNavigationProp>();

  const onPress = useCallback(() => {
    navigation.reset({ routes: [{ name: 'Home' }] });
  }, [navigation]);
  // reset : 스택 초기화
  // Home -> List -> Chat(현재있는곳) -> navigation.reset -> Chat

  return (
    <SafeAreaContainer>
      <Text color="#303030">Chat Screen</Text>

      <Button onPress={onPress}>
        <Text color="#fff">초기화면으로!</Text>
      </Button>
    </SafeAreaContainer>
  );
};

export default memo(Chat);
