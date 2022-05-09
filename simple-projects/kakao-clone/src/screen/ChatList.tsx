import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import {
  Linking,
  ListRenderItem,
  Pressable,
  StyleProp,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';
import { useFocusEffect } from '@react-navigation/native';
import { SwipeListView } from 'react-native-swipe-list-view';

import {
  Banner,
  Header,
  LeaveModal,
  RoomItem,
  StyledText,
} from '../components/common';
import { SafeAreaContainer } from '../components/layout';
import { bannerData } from '../api/sample/banner';
import { IRoom, RoomEntity } from '../type';

import { roomSampleData } from '../api/sample/roomList';

const BannerContainer = styled.View({
  paddingHorizontal: 15,
  marginBottom: 20,
});

const RowBack = styled.View({
  flex: 1,
  flexDirection: 'row',
});

const Footer = styled.View({
  width: '100%',
  height: 30,
});

const ButtonIcon = styled.Image(({ theme }) => ({
  width: 17,
  height: 17,
  tintColor: theme.color.white,
}));

const EmptyRoomContainer = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

const ChatList = () => {
  const theme = useTheme();
  const [roomData, setRoomData] = useState<IRoom[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const order = roomSampleData.map((item, findIndex) => {
      if (findIndex === 1) {
        item.data.sort((a, b): number => {
          return a.user.name < b.user.name
            ? -1
            : a.user.name === b.user.name
            ? 0
            : 1;
        });
      }

      return item;
    }, []);

    setRoomData(order);
  }, []);

  useFocusEffect(() => {});

  const Row = useMemo<StyleProp<ViewStyle>>(
    () => ({
      height: 60,
      justifyContent: 'center',
      backgroundColor: theme.color.white,
      paddingVertical: 8,
    }),
    [theme]
  );

  const FavoritesButton = useMemo<StyleProp<ViewStyle>>(
    () => ({
      position: 'absolute',
      bottom: 0,
      top: 0,
      width: 75,
      left: 0,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.color.skyblue.one,
    }),
    [theme]
  );

  const AlramButton = useMemo<StyleProp<ViewStyle>>(
    () => ({
      position: 'absolute',
      bottom: 0,
      top: 0,
      width: 75,
      left: 75,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.color.skyblue.two,
    }),
    [theme]
  );

  const PinButton = useMemo<StyleProp<ViewStyle>>(
    () => ({
      position: 'absolute',
      bottom: 0,
      top: 0,
      width: 75,
      left: 150,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.color.skyblue.three,
    }),
    [theme]
  );

  const ReadButton = useMemo<StyleProp<ViewStyle>>(
    () => ({
      position: 'absolute',
      bottom: 0,
      top: 0,
      width: 75,
      right: 75,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.color.thickGray,
    }),
    [theme]
  );

  const LeaveButton = useMemo<StyleProp<ViewStyle>>(
    () => ({
      position: 'absolute',
      bottom: 0,
      top: 0,
      width: 75,
      right: 0,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.color.orange,
    }),
    [theme]
  );

  const keyExtractor = useCallback((item: RoomEntity) => `${item.roomId}`, []);

  const onLeave = useCallback(
    (rowMap, { roomId, user }) =>
      () => {
        rowMap[roomId].closeRow();

        const newData = [...roomData];
        const foundIndex = roomData[user.section].data.findIndex(
          (item) => item.roomId === roomId
        );

        newData[user.section].data.splice(foundIndex, 1);
        setRoomData(newData);
      },
    [roomData]
  );

  const onPostive = useCallback(() => {}, []);

  const onNegative = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onPin = useCallback(
    (rowMap, { roomId, user, isPin }) =>
      () => {
        rowMap[roomId].closeRow();

        const newData = [...roomData];
        const foundIndex = roomData[user.section].data.findIndex(
          (item) => item.roomId === roomId
        );

        const room = newData[user.section].data[foundIndex];
        const list = newData[user.section].data;
        room.isPin = !isPin;

        if (user.section === 1) {
          room.user.section = 0;
          newData[0].data.unshift(room);
        } else {
          room.user.section = 1;
          newData[1].data.unshift(room);

          newData[1].data.sort((a, b): number => {
            return a.user.name < b.user.name
              ? -1
              : a.user.name === b.user.name
              ? 0
              : 1;
          });
        }

        list.splice(foundIndex, 1);
        setRoomData(newData);
      },
    [roomData]
  );

  const onAlram = useCallback(
    (rowMap, { roomId, isAlram, user }) =>
      () => {
        rowMap[roomId].closeRow();

        const newData = [...roomData];

        const foundIndex = roomData[user.section].data.findIndex(
          (item) => item.roomId === roomId
        );

        newData[user.section].data[foundIndex].isAlram = !isAlram;

        setRoomData(newData);
      },
    [roomData]
  );

  const onFavorits = useCallback(
    (rowMap, { roomId, isFavorites, user }) =>
      () => {
        rowMap[roomId].closeRow();

        const newData = [...roomData];

        const foundIndex = roomData[user.section].data.findIndex(
          (item) => item.roomId === roomId
        );

        newData[user.section].data[foundIndex].isFavorites = !isFavorites;

        setRoomData(newData);
      },
    [roomData]
  );

  const onReadMessage = useCallback(
    (rowMap, { roomId, user }) =>
      () => {
        rowMap[roomId].closeRow();

        const newData = [...roomData];

        const foundIndex = roomData[user.section].data.findIndex(
          (item) => item.roomId === roomId
        );

        const room = newData[user.section].data[foundIndex];

        room.isRead = true;
        room.chatCount = 0;

        setRoomData(newData);
      },

    [roomData]
  );

  const renderHiddenItem = useCallback(
    ({ item }, rowMap) => {
      return (
        <RowBack>
          <TouchableOpacity
            style={FavoritesButton}
            onPress={onFavorits(rowMap, item)}
          >
            <ButtonIcon
              source={
                item.isFavorites
                  ? theme.icon.favoritesfill
                  : theme.icon.favorites
              }
            />
          </TouchableOpacity>

          <TouchableOpacity style={AlramButton} onPress={onAlram(rowMap, item)}>
            <ButtonIcon
              source={
                item.isAlram
                  ? theme.icon.notificaitonfill
                  : theme.icon.notificaiton
              }
            />
          </TouchableOpacity>

          <TouchableOpacity style={PinButton} onPress={onPin(rowMap, item)}>
            <ButtonIcon
              source={item.isPin ? theme.icon.pinfill : theme.icon.pin}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={ReadButton}
            onPress={onReadMessage(rowMap, item)}
          >
            <StyledText fontSize={13} color={theme.color.white} isBold>
              읽음
            </StyledText>
          </TouchableOpacity>

          <TouchableOpacity style={LeaveButton} onPress={onLeave(rowMap, item)}>
            <StyledText fontSize={13} color={theme.color.white} isBold>
              나가기
            </StyledText>
          </TouchableOpacity>
        </RowBack>
      );
    },
    [
      FavoritesButton,
      AlramButton,
      PinButton,
      LeaveButton,
      ReadButton,
      onFavorits,
      onAlram,
      onPin,
      onLeave,
      onReadMessage,
      theme,
    ]
  );

  const renderItem = useCallback<ListRenderItem<RoomEntity>>(
    ({ item }) => {
      return (
        <Pressable onPress={() => console.log('')} style={Row}>
          <RoomItem
            avatar={{ uri: item.user.image_url }}
            isLock={item.isChatLook}
            isPin={item.isPin}
            isUnNotification={item.isAlram}
            lastMessage={item.lastMessage}
            lastUpdateOn={item.lastUpdateOn}
            title={item.user.name}
            chatCount={item.chatCount}
          />
        </Pressable>
      );
    },
    [Row]
  );

  const onPressBanner = useCallback(async () => {
    Linking.openURL('https://tv.kakao.com/channel/3643851/info');
  }, []);

  const listHeaderComponent = useCallback(() => {
    return (
      <BannerContainer>
        <Banner
          source={theme.icon.samplebanner}
          status={bannerData.status}
          onPress={onPressBanner}
        />
      </BannerContainer>
    );
  }, [onPressBanner, theme]);

  const listFooterComponent = useCallback(() => {
    return <Footer />;
  }, []);

  return !!roomSampleData[0].data.length || !!roomSampleData[1].data.length ? (
    <SafeAreaContainer>
      <Header
        title="채팅"
        fontSize={24}
        one={theme.icon.search}
        two={theme.icon.chatplus}
        three={theme.icon.music}
        four={theme.icon.headersetting}
      />

      <SwipeListView
        useSectionList
        sections={roomData}
        keyExtractor={keyExtractor}
        stickySectionHeadersEnabled={false}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        ListHeaderComponent={listHeaderComponent}
        ListFooterComponent={listFooterComponent}
        leftOpenValue={225}
        stopLeftSwipe={225}
        stopRightSwipe={-150}
        rightOpenValue={-150}
        previewOpenDelay={3000}
      />
      {isOpen && (
        <LeaveModal
          isOpen={isOpen}
          onNegative={onNegative}
          onPostive={onPostive}
        />
      )}
    </SafeAreaContainer>
  ) : (
    <EmptyRoomContainer>
      <StyledText isBold fontSize={17}>
        개설된 채팅방이 없습니다.
      </StyledText>
    </EmptyRoomContainer>
  );
};

export default memo(ChatList);
