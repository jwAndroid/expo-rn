import React, { memo, useCallback, useState } from 'react';
import styled from '@emotion/native';
import { FlatList, ListRenderItem } from 'react-native';
import UserItem from './src/UserItem';

const Container = styled.View({
  flex: 1,
  marginTop: 30,
});

interface IItem {
  id: string;
  nickname: string;
}

const data: IItem[] = Array(1000)
  .fill(null)
  .map((_, index) => ({
    id: `${index}`,
    nickname: '닉네임',
  }));

const App = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const onPress = useCallback(() => {
    console.log('onPress');
  }, []);

  const renderItem = useCallback<ListRenderItem<IItem>>(
    ({ item }) => {
      return (
        <UserItem
          marginTop={20}
          marginBottom={20}
          nickname={item.nickname}
          buttonText="버튼"
          onPress={onPress}
        />
      );
    },
    [onPress]
  );

  const onRefreshing = useCallback(() => {
    setIsRefreshing(true);

    setTimeout(() => {
      setIsRefreshing(false);
    }, 200);
  }, []);

  const onEndReached = useCallback(() => {
    console.log('onEndReached');
  }, []);

  return (
    <Container>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onEndReachedThreshold={0}
        onEndReached={onEndReached}
        refreshing={isRefreshing}
        onRefresh={onRefreshing}
      />
    </Container>
  );
};

export default memo(App);
