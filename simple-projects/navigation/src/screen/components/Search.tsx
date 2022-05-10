import { useNavigation, useRoute } from '@react-navigation/native';
import { memo, useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { TestType } from '../../type';
import {
  SearchScreenNavigationProp,
  SearchScreenRouteProp,
} from '../MailStack';

const Search = () => {
  const [tsData, setTsData] = useState<TestType>();

  const { params } = useRoute<SearchScreenRouteProp>();
  const navigation = useNavigation<SearchScreenNavigationProp>();

  useEffect(() => {
    if (params) {
      setTsData(params);
    }

    // console.log(`id : ${params?.id} text : ${params?.text}`);
  }, [params]);

  const onPress = useCallback(() => {
    navigation.goBack();
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
    </View>
  );
};

export default memo(Search);
