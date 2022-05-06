import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import {
  ListRenderItem,
  Pressable,
  StyleProp,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';
import { useFocusEffect } from '@react-navigation/native';
import { SwipeListView } from 'react-native-swipe-list-view';
import moment from 'moment';

import { Banner, Header, RoomItem } from '../components/common';
import { SafeAreaContainer } from '../components/layout';
import { bannerData } from '../api/sample/banner';
import { RoomEntity } from '../type';

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

const ChatList = () => {
  const theme = useTheme();

  const [roomData, setRoomData] = useState<RoomEntity[]>([]);

  useEffect(() => {
    const orderedList = roomSampleData.sort((a, b): number => {
      return b.lastUpdateOn - a.lastUpdateOn;
    });

    setRoomData(orderedList);
  }, []);

  useFocusEffect(() => {
    const now = Date.now(); // 오늘 타임스탬프
    const nowTime = moment(1651355793438).format('YYYY-MM-DD'); // 모맨트->변환

    // console.log(nowTime);
  });

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
      backgroundColor: 'red',
    }),
    []
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
      backgroundColor: 'gray',
    }),
    []
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
      backgroundColor: 'blue',
    }),
    []
  );

  const ReadButton = useMemo<StyleProp<ViewStyle>>(
    () => ({
      position: 'absolute',
      bottom: 0,
      top: 0,
      width: 75,
      right: 0,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'red',
    }),
    []
  );

  const LeaveButton = useMemo<StyleProp<ViewStyle>>(
    () => ({
      position: 'absolute',
      bottom: 0,
      top: 0,
      width: 75,
      right: 75,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'blue',
    }),
    []
  );

  const keyExtractor = useCallback((item: RoomEntity) => `${item.roomId}`, []);

  const onLeaveRoom = useCallback(
    (rowMap, id) => () => {
      rowMap[id].closeRow();

      const updateLeaveRoom = roomData.filter((room) => room.roomId !== id, []);

      setRoomData(updateLeaveRoom);
    },
    [roomData]
  );

  const onPin = useCallback(
    (rowMap, { roomId, isPin }) =>
      () => {
        rowMap[roomId].closeRow();

        const updatedPinRooms = roomData.map((room) => {
          return room.roomId === roomId ? { ...room, isPin: !isPin } : room;
        }, []);

        setRoomData(updatedPinRooms);
      },
    [roomData]
  );

  const onAlram = useCallback(
    (rowMap, { roomId, isAlram }) =>
      () => {
        rowMap[roomId].closeRow();

        const updatedAlramRooms = roomData.map((room) => {
          return room.roomId === roomId ? { ...room, isAlram: !isAlram } : room;
        }, []);

        setRoomData(updatedAlramRooms);
      },
    [roomData]
  );

  const onFavorits = useCallback(
    (rowMap, { roomId, isFavorites }) =>
      () => {
        rowMap[roomId].closeRow();

        const updatedFavoritesRooms = roomData.map((room) => {
          return room.roomId === roomId
            ? { ...room, isFavorites: !isFavorites }
            : room;
        }, []);

        setRoomData(updatedFavoritesRooms);
      },
    [roomData]
  );

  const onReadMessage = useCallback(
    (rowMap, roomId) => () => {
      rowMap[roomId].closeRow();

      const updatedReadRooms = roomData.map((room) => {
        return room.roomId === roomId ? { ...room, isRead: true } : room;
      }, []);

      setRoomData(updatedReadRooms);
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
            <Text>즐겨찾기</Text>
          </TouchableOpacity>

          <TouchableOpacity style={AlramButton} onPress={onAlram(rowMap, item)}>
            <Text>알람</Text>
          </TouchableOpacity>

          <TouchableOpacity style={PinButton} onPress={onPin(rowMap, item)}>
            <Text>핀</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={LeaveButton}
            onPress={onLeaveRoom(rowMap, item.roomId)}
          >
            <Text>나가기</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={ReadButton}
            onPress={onReadMessage(rowMap, item.roomId)}
          >
            <Text>읽음</Text>
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
      onLeaveRoom,
      onReadMessage,
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
          />
        </Pressable>
      );
    },
    [Row]
  );

  const listHeaderComponent = useCallback(() => {
    return (
      <BannerContainer>
        <Banner source={theme.icon.samplebanner} status={bannerData.status} />
      </BannerContainer>
    );
  }, [theme]);

  const listFooterComponent = useCallback(() => {
    return <Footer />;
  }, []);

  return (
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
        data={roomData}
        keyExtractor={keyExtractor}
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
    </SafeAreaContainer>
  );
};

export default memo(ChatList);
