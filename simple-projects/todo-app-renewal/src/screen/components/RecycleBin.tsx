import { memo, useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from '@emotion/native';

import { StyledText } from '../../components/text';

const Container = styled.View({
  flex: 1,
});

const RecycleBin = () => {
  // const [bin, setBin] = useState<TodoObject[]>([]);

  // state 떄문에 디도스 생기는거

  const getBinStorage = useCallback(async () => {
    const deleteDataList = JSON.parse(
      (await AsyncStorage.getItem('binTodos')) || '[]'
    );

    console.log('----------bin------------');
    console.log(deleteDataList);
  }, []);

  useEffect(() => {
    getBinStorage();
  }, [getBinStorage]);

  return (
    <Container>
      <StyledText>RecycleBin screen</StyledText>
    </Container>
  );
};

export default memo(RecycleBin);
