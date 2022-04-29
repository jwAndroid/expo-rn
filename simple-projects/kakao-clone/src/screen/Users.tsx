import { memo, useCallback, useMemo, useState } from 'react';
import {
  ListRenderItem,
  StyleProp,
  TouchableHighlight,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';
import { SwipeListView } from 'react-native-swipe-list-view';

import { Header, StyledText, UserCard } from '../components/common';
import { SafeAreaContainer } from '../components/layout';
import { SampleData } from '../api/sample/data';
import { UserEntity } from '../type';

const MYPROFILE = {
  id: 178189,
  name: '저입니다!!',
  image_url: '내 이미지 프로필',
};

const Container = styled.View(() => ({
  flex: 1,
}));

const ProfileContainer = styled.View(({ theme }) => ({
  width: '100%',
  paddingVertical: 15,
  backgroundColor: theme.color.gray,
}));

const RowBack = styled.View({
  alignItems: 'center',
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingLeft: 5,
  backgroundColor: '#000000',
});

const Users = () => {
  const theme = useTheme();
  const [listData, setListData] = useState<UserEntity[]>(SampleData);
  const keyExtractor = useCallback((item: UserEntity) => `${item.id}`, []);

  const rowFront = useMemo<StyleProp<ViewStyle>>(
    () => ({
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 0.5,
      borderBottomColor: 'black',
      backgroundColor: 'lightcoral',
    }),
    []
  );

  const actionButton = useMemo<StyleProp<ViewStyle>>(
    () => ({
      bottom: 0,
      position: 'absolute',
      top: 0,
      width: 75,
      alignItems: 'center',
      justifyContent: 'center',
    }),
    []
  );

  const closeButton = useMemo<StyleProp<ViewStyle>>(
    () => ({
      right: 75,
      backgroundColor: 'blue',
    }),
    []
  );

  const deleteButton = useMemo<StyleProp<ViewStyle>>(
    () => ({
      backgroundColor: 'red',
      right: 0,
    }),
    []
  );

  const closeItem = useCallback(
    (rowMap, rowKey) => () => {
      if (rowMap[rowKey]) {
        rowMap[rowKey].closeRow();
      }
    },
    []
  );

  const deleteItem = useCallback(
    (rowMap, rowKey) => () => {
      closeItem(rowMap, rowKey);
      const newData = [...listData];
      const prevIndex = listData.findIndex((item) => item.id === rowKey);
      newData.splice(prevIndex, 1);
      setListData(newData);
    },
    [closeItem, listData]
  );

  const onItemOpen = useCallback((rowKey) => {
    console.log(`Row open : ${rowKey}`);
  }, []);

  const onPressItem = useCallback(
    (item) => () => {
      console.log(item);
    },
    []
  );

  const renderHiddenItem = useCallback(
    ({ item }, rowMap) => {
      return (
        <RowBack>
          <TouchableOpacity
            style={[actionButton, closeButton]}
            onPress={closeItem(rowMap, item.id)}
          >
            <StyledText>Close</StyledText>
          </TouchableOpacity>

          <TouchableOpacity
            style={[actionButton, deleteButton]}
            onPress={deleteItem(rowMap, item.id)}
          >
            <StyledText>Delete</StyledText>
          </TouchableOpacity>
        </RowBack>
      );
    },
    [deleteItem, closeItem, actionButton, deleteButton, closeButton]
  );

  const renderItem = useCallback<ListRenderItem<UserEntity>>(
    ({ item }) => {
      return (
        <TouchableHighlight onPress={onPressItem(item)} style={rowFront}>
          <StyledText>텍스트:{item.name}</StyledText>
        </TouchableHighlight>
      );
    },
    [onPressItem, rowFront]
  );

  return (
    <SafeAreaContainer>
      <Header
        title="친구"
        one={theme.icon.search}
        two={theme.icon.users}
        three={theme.icon.music}
        four={theme.icon.headersetting}
      />

      <ProfileContainer>
        <UserCard name={MYPROFILE.name} imageUrl={MYPROFILE.image_url} />
      </ProfileContainer>

      <Container>
        <SwipeListView
          data={listData}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          onRowDidOpen={onItemOpen}
          leftOpenValue={0}
          disableRightSwipe
          stopRightSwipe={-150}
          rightOpenValue={-150}
          previewRowKey="0"
          previewOpenValue={-40}
          previewOpenDelay={3000}
        />
      </Container>
    </SafeAreaContainer>
  );
};

export default memo(Users);
