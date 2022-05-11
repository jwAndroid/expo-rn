import { useNavigation, useRoute } from '@react-navigation/native';
import { memo, useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import {
  SearchScreenNavigationProp,
  SearchScreenRouteProp,
} from '../MailStack';

import { TestType } from '../../type';

const Search = () => {
  const [tsData, setTsData] = useState<TestType>();

  const { params } = useRoute<SearchScreenRouteProp>();
  const navigation = useNavigation<SearchScreenNavigationProp>();

  useEffect(() => {
    if (params) {
      setTsData(params);
    }
  }, [params]);

  const onPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onMove = useCallback(() => {
    navigation.navigate('Search2');
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
      }}
    >
      <Text>서치 스크린</Text>
      <Text onPress={onPress} style={{ fontSize: 30 }}>
        클릭:뒤로가기
      </Text>
      <Text onPress={onPress}>===============</Text>

      <Text onPress={onPress}>전달받은 아이디: {tsData?.id}</Text>
      <Text onPress={onPress}>전달받은 텍스트: {tsData?.text}</Text>

      <Text
        onPress={onMove}
        style={{ marginTop: 20, fontSize: 30, color: 'blue' }}
      >
        서치2 스크린으로 중첩이동
      </Text>

      <View style={{ width: '100%', height: 200, backgroundColor: 'red' }} />

      {/* 바텀 네비게이션이 없을때 + 키보드를 사용해야할때 네비게이션이 어떻게 노출되는지 테스트 */}
      <TextInput
        style={{ backgroundColor: 'black', width: '100%', marginBottom: 50 }}
      />
    </View>
  );
};

export default memo(Search);
