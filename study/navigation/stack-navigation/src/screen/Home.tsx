import { useNavigation } from '@react-navigation/native';
import { memo, useCallback } from 'react';

import Button from '../components/common/Button';
import Text from '../components/common/Text';
import SafeAreaContainer from '../components/layout/SafeAreaContainer';
import { HomeScreenNavigationProp } from '../navigation/Stack';

const Home = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const onPress = useCallback(() => {
    navigation.navigate('List');
  }, [navigation]);

  return (
    <SafeAreaContainer>
      <Text color="#303030">Home Screen</Text>

      <Button onPress={onPress}>List 으로 이동</Button>
    </SafeAreaContainer>
  );
};

export default memo(Home);
