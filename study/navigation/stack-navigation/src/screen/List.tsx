import { useNavigation } from '@react-navigation/native';
import { memo, useCallback } from 'react';

import SafeAreaContainer from '../components/layout/SafeAreaContainer';
import Button from '../components/common/Button';
import Text from '../components/common/Text';
import { ListScreenNavigationProp } from '../navigation/Stack';

const List = () => {
  const navigation = useNavigation<ListScreenNavigationProp>();

  const onPress = useCallback(() => {
    navigation.navigate('Chat');
  }, [navigation]);

  return (
    <SafeAreaContainer>
      <Text color="#303030">List Screen</Text>

      <Button onPress={onPress}>
        <Text color="#fff">Chat으로 이동~</Text>
      </Button>
    </SafeAreaContainer>
  );
};

export default memo(List);
