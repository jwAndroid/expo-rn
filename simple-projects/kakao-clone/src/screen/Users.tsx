import { memo, useCallback, useMemo, useState } from 'react';
import {
  ListRenderItem,
  StyleProp,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';
import { SwipeListView } from 'react-native-swipe-list-view';

import { Header, StyledText, UserCard } from '../components/common';
import { SafeAreaContainer } from '../components/layout';
import { SampleSectionData } from '../api/sample/data';
import { IUser, UserEntity } from '../type';

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
  backgroundColor: '#fff',
});

const Users = () => {
  const theme = useTheme();
  const [listData, setListData] = useState<IUser[]>(SampleSectionData);
  const keyExtractor = useCallback((item: UserEntity) => `${item.id}`, []);

  const rowFront = useMemo<StyleProp<ViewStyle>>(
    () => ({
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: theme.color.black,
      borderWidth: 3,
      backgroundColor: theme.color.gray,
    }),
    [theme]
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

  const go = useCallback(
    (rowMap, { id, section }) =>
      () => {
        if (section === 1) {
          const newData = [...listData];
          const foundIndex = listData[section].data.findIndex(
            (item) => item.id === id
          );
          // n 섹션에 옮길때
          // newData[section].data[foundIndex].section = 1
          newData[section].data[foundIndex].section = 0;

          newData[0].data.unshift(newData[section].data[foundIndex]);

          newData[section].data.splice(foundIndex, 1);

          setListData(newData);

          console.log(newData);
        } else {
          console.log('다른 섹션입니다.');
        }
      },
    [listData]
  );

  const back = useCallback(
    (rowMap, { id, section }) =>
      () => {
        if (section === 0) {
          const newData = [...listData];
          const foundIndex = listData[section].data.findIndex(
            (item) => item.id === id
          );

          newData[section].data[foundIndex].section = 1;

          newData[1].data.unshift(newData[section].data[foundIndex]);

          newData[section].data.splice(foundIndex, 1);

          setListData(newData);

          console.log(newData);
        } else {
          console.log('다른 섹션입니다.');
        }
      },
    [listData]
  );

  const deleteItem = useCallback(
    (rowMap, rowKey) => () => {
      // id : n.m (n : section , m : item id)
      const id = rowKey.toString();
      const [section] = id.split('.');
      const newData = [...listData];
      const foundIndex = listData[section].data.findIndex(
        (item) => item.id === rowKey
      );
      newData[section].data.splice(foundIndex, 1);
      setListData(newData);
    },
    [listData]
  );

  const onItemOpen = useCallback((rowKey) => {
    // console.log(`Row open : ${rowKey}`);
  }, []);

  const onPressItem = useCallback(
    (item) => () => {
      // console.log(item);
    },
    []
  );

  const onPressLeft = useCallback(
    (rowMap, rowKey) => () => {
      rowMap[rowKey].closeRow();
      // console.log(`로우맵 ${rowMap} 키 : ${rowKey}`);
    },
    []
  );

  const renderHiddenItem = useCallback(
    ({ item }, rowMap) => {
      return (
        <RowBack>
          <Text onPress={onPressLeft(rowMap, item.id)}>Left</Text>

          <TouchableOpacity
            style={[actionButton, closeButton]}
            onPress={back(rowMap, item)}
          >
            <StyledText>back</StyledText>
          </TouchableOpacity>

          <TouchableOpacity
            style={[actionButton, deleteButton]}
            onPress={go(rowMap, item)}
          >
            <StyledText>go</StyledText>
          </TouchableOpacity>
        </RowBack>
      );
    },
    [go, closeItem, actionButton, deleteButton, closeButton, onPressLeft]
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

  const renderSectionHeader = useCallback(({ section }) => {
    return <StyledText>{section.title}</StyledText>;
  }, []);

  // const renderSectionHeader = ({ section }) => <Text>{section.title}</Text>;

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
          useSectionList
          sections={listData}
          renderSectionHeader={renderSectionHeader}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          onRowDidOpen={onItemOpen}
          stopLeftSwipe={75}
          leftOpenValue={75}
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
