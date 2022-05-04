import { memo, useCallback, useMemo, useState } from 'react';
import {
  ListRenderItem,
  Pressable,
  StyleProp,
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

interface ISectionHeaderContainer {
  isFlexDirection?: boolean;
}

const SectionHeaderContainer = styled.View<ISectionHeaderContainer>(
  ({ isFlexDirection }) => ({
    width: '100%',
    flexDirection: isFlexDirection ? 'row' : undefined,
    paddingHorizontal: 15,
    paddingVertical: 15,
  })
);

const ProfileContainer = styled.View(() => ({
  width: '100%',
  paddingHorizontal: 15,
  paddingVertical: 15,
}));

const RowBack = styled.View({
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
});

const Footer = styled.View({
  width: '100%',
  height: 30,
});

const FavoritesIcon = styled.Image(({ theme }) => ({
  width: 20,
  height: 20,
  tintColor: theme.color.white,
}));

const Users = () => {
  const theme = useTheme();
  const [listData, setListData] = useState<IUser[]>(sampleSectionData);

  const Row = useMemo<StyleProp<ViewStyle>>(
    () => ({
      height: 60,
      paddingHorizontal: 15,
      justifyContent: 'center',
      backgroundColor: theme.color.white,
    }),
    [theme]
  );

  const FavoritesButton = useMemo<StyleProp<ViewStyle>>(
    () => ({
      bottom: 0,
      position: 'absolute',
      top: 0,
      width: 75,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.color.thickBlue,
    }),
    [theme]
  );

  const ActionButton = useMemo<StyleProp<ViewStyle>>(
    () => ({
      position: 'absolute',
      bottom: 0,
      top: 0,
      width: 75,
      alignItems: 'center',
      justifyContent: 'center',
    }),
    []
  );

  const HidingButton = useMemo<StyleProp<ViewStyle>>(
    () => ({
      right: 75,
      backgroundColor: theme.color.thickGray,
    }),
    [theme]
  );

  const BlockButton = useMemo<StyleProp<ViewStyle>>(
    () => ({
      right: 0,
      backgroundColor: theme.color.orange,
    }),
    [theme]
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

  const renderHiddenItem = useCallback(
    ({ item }, rowMap) => {
      return (
        <RowBack>
          {item.section === 0 ? (
            <TouchableOpacity
              style={FavoritesButton}
              onPress={onFavorites(item)}
            >
              <FavoritesIcon source={theme.icon.favoritesfill} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={FavoritesButton}
              onPress={onFavorites(item)}
            >
              <FavoritesIcon source={theme.icon.favorites} />
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={[ActionButton, HidingButton]}
            onPress={deleteItem(rowMap, item)}
          >
            <StyledText color={theme.color.white} fontSize={14}>
              숨김
            </StyledText>
          </TouchableOpacity>

          <TouchableOpacity
            style={[ActionButton, BlockButton]}
            onPress={deleteItem(rowMap, item)}
          >
            <StyledText color={theme.color.white} fontSize={14}>
              차단
            </StyledText>
          </TouchableOpacity>
        </RowBack>
      );
    },
    [
      onFavorites,
      deleteItem,
      FavoritesButton,
      HidingButton,
      ActionButton,
      BlockButton,
      theme,
    ]
  );

  const onPressChip = useCallback(
    (item: UserEntity) => () => {
      console.log(item);
    },
    []
  );

  const renderItem = useCallback<ListRenderItem<UserEntity>>(
    ({ item }) => {
      return (
        <Pressable onPress={onPressItem(item)} style={Row}>
          <UserCard
            name={item.name}
            introduction={item.introduction}
            fontSize={17}
            introductionSize={12}
            isBold={false}
            imageUrl={item.image_url}
            avatarWidth={50}
            avatarHeight={50}
            avatarRadius={18}
            music={item.music}
            onPressChip={onPressChip(item)}
          />
        </Pressable>
      );
    },
    [onPressItem, onPressChip, Row]
  );

  const renderSectionHeader = useCallback(
    ({ section }) => {
      if (section.title === '즐겨찾기') {
        return (
          <SectionHeaderContainer>
            <StyledText fontSize={13} color={theme.color.subtitle}>
              {section.title}
            </StyledText>
          </SectionHeaderContainer>
        );
      }

      if (section.title === '친구') {
        return (
          <SectionHeaderContainer isFlexDirection>
            <StyledText fontSize={13} color={theme.color.subtitle}>
              {section.title}
            </StyledText>
            <StyledText
              fontSize={13}
              color={theme.color.subtitle}
              paddingLeft={5}
            >
              {friendCount}
            </StyledText>
          </SectionHeaderContainer>
        );
      }
    },
    [friendCount, theme]
  );

  const listHeaderComponent = useCallback(() => {
    return (
      <ProfileContainer>
        <UserCard
          name={myProfile.name}
          fontSize={18}
          isBold
          imageUrl={myProfile.image_url}
          avatarWidth={60}
          avatarHeight={60}
          avatarRadius={22}
        />
      </ProfileContainer>
    );
  }, []);

  const listFooterComponent = useCallback(() => {
    return <Footer />;
  }, []);

  return (
    <SafeAreaContainer>
      <Header
        title="친구"
        fontSize={24}
        one={theme.icon.search}
        two={theme.icon.users}
        three={theme.icon.music}
        four={theme.icon.headersetting}
      />

      <Container>
        <SwipeListView
          useSectionList
          sections={listData}
          renderSectionHeader={renderSectionHeader}
          stickySectionHeadersEnabled={false}
          ListHeaderComponent={listHeaderComponent}
          ListFooterComponent={listFooterComponent}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          stopLeftSwipe={75}
          leftOpenValue={75}
          stopRightSwipe={-150}
          rightOpenValue={-150}
          previewOpenDelay={3000}
        />
      </Container>
    </SafeAreaContainer>
  );
};

export default memo(Users);
