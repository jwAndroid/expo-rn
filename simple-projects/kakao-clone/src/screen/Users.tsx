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
import { sampleSectionData, myProfile } from '../api/sample/data';
import { IUser, UserEntity } from '../type';
import { FAVORITES_SEC_INDEX, FRIEND_SEC_INDEX } from '../constants';

const Container = styled.View(() => ({
  flex: 1,
}));

const SectionHeaderContainer = styled.View({
  width: '100%',
  flexDirection: 'row',
  paddingHorizontal: 15,
  paddingVertical: 15,
});

const ProfileContainer = styled.View(() => ({
  width: '100%',
  paddingHorizontal: 15,
  paddingVertical: 15,
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
  const [listData, setListData] = useState<IUser[]>(sampleSectionData);

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

  const friendCount = useMemo(
    () => listData[FRIEND_SEC_INDEX].data.length,
    [listData]
  );

  const keyExtractor = useCallback((item: UserEntity) => `${item.id}`, []);

  const onFavorites = useCallback(
    ({ id, section }) =>
      () => {
        const newData = [...listData];
        const foundIndex = listData[section].data.findIndex(
          (item) => item.id === id
        );

        if (section === FRIEND_SEC_INDEX) {
          newData[section].data[foundIndex].section = FAVORITES_SEC_INDEX;
          newData[FAVORITES_SEC_INDEX].data.unshift(
            newData[section].data[foundIndex]
          );

          newData[section].data.splice(foundIndex, 1);
        } else {
          newData[section].data[foundIndex].section = FRIEND_SEC_INDEX;
          newData[FRIEND_SEC_INDEX].data.unshift(
            newData[section].data[foundIndex]
          );

          newData[section].data.splice(foundIndex, 1);
        }

        setListData(newData);
      },
    [listData]
  );

  const deleteItem = useCallback(
    (rowMap, { id, section }) =>
      () => {
        rowMap[id].closeRow();
        const newData = [...listData];
        const foundIndex = listData[section].data.findIndex(
          (item) => item.id === id
        );
        newData[section].data.splice(foundIndex, 1);
        setListData(newData);
      },
    [listData]
  );

  const onPressItem = useCallback(
    (item) => () => {
      console.log(item);
    },
    []
  );

  const onPress = useCallback(
    (rowMap, rowKey) => () => {
      rowMap[rowKey].closeRow();
    },
    []
  );

  const renderHiddenItem = useCallback(
    ({ item }, rowMap) => {
      return (
        <RowBack>
          {item.section === 0 ? (
            <Text onPress={onFavorites(item)}>즐찾</Text>
          ) : (
            <Text onPress={onFavorites(item)}>즐겨찾기</Text>
          )}

          <TouchableOpacity
            style={[actionButton, closeButton]}
            onPress={onPress(rowMap, item.id)}
          >
            <StyledText>숨김</StyledText>
          </TouchableOpacity>

          <TouchableOpacity
            style={[actionButton, deleteButton]}
            onPress={deleteItem(rowMap, item)}
          >
            <StyledText>차단</StyledText>
          </TouchableOpacity>
        </RowBack>
      );
    },
    [onFavorites, deleteItem, onPress, actionButton, deleteButton, closeButton]
  );

  const renderItem = useCallback<ListRenderItem<UserEntity>>(
    ({ item }) => {
      return (
        <TouchableHighlight onPress={onPressItem(item)} style={rowFront}>
          <StyledText>{item.name}</StyledText>
        </TouchableHighlight>
      );
    },
    [onPressItem, rowFront]
  );

  const renderSectionHeader = useCallback(
    ({ section }) => {
      if (section.title === '친구') {
        return (
          <SectionHeaderContainer>
            <StyledText>{section.title}</StyledText>
            <StyledText paddingLeft={5}>{friendCount}</StyledText>
          </SectionHeaderContainer>
        );
      }

      if (section.title === '즐겨찾기') {
        return <StyledText>{section.title}</StyledText>;
      }
    },
    [friendCount]
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
        <UserCard
          name={myProfile.name}
          isBold
          imageUrl={myProfile.image_url}
          avatarWidth={60}
          avatarHeight={60}
          avatarRadius={22}
        />
      </ProfileContainer>

      <Container>
        <SwipeListView
          useSectionList
          sections={listData}
          renderSectionHeader={renderSectionHeader}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
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
