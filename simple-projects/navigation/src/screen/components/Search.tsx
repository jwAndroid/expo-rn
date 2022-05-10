import { useNavigation } from '@react-navigation/native';
import { memo, useCallback } from 'react';
import { Text, View } from 'react-native';
import { SearchScreenNavigationProp } from '../MailStack';

const Search = () => {
  const navigation = useNavigation<SearchScreenNavigationProp>();

  const onPress = useCallback(() => {
    navigation.reset({ routes: [{ name: 'Mail' }] });
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text onPress={onPress}>서치스크린 .. 클릭 : 초기화면</Text>
    </View>
  );
};

export default memo(Search);
