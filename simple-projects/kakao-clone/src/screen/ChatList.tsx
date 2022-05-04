import { memo, useCallback, useMemo, useState } from 'react';
import {
  ListRenderItem,
  Pressable,
  StyleProp,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';

import { Banner, Header } from '../components/common';
import { SafeAreaContainer } from '../components/layout';
import { bannerData } from '../api/sample/banner';
import { RoomEntity } from '../type';

import { roomSampleData } from '../api/sample/roomList';

const BannerContainer = styled.View({
  paddingHorizontal: 15,
  marginTop: 15,
  marginBottom: 25,
});

const Container = styled.View({
  flex: 1,
  backgroundColor: 'orange',
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

  const [roomData, setRoomData] = useState<RoomEntity[]>(roomSampleData);

  const Row = useMemo<StyleProp<ViewStyle>>(
    () => ({
      height: 60,
      justifyContent: 'center',
      backgroundColor: theme.color.white,
    }),
    [theme]
  );

  const LeftButton1 = useMemo<StyleProp<ViewStyle>>(
    () => ({
      position: 'absolute',
      bottom: 0,
      top: 0,
      width: 75,
      left: 0,
      backgroundColor: 'red',
    }),
    []
  );

  const LeftButton2 = useMemo<StyleProp<ViewStyle>>(
    () => ({
      position: 'absolute',
      bottom: 0,
      top: 0,
      width: 75,
      left: 75,
      backgroundColor: 'gray',
    }),
    []
  );

  const LeftButton3 = useMemo<StyleProp<ViewStyle>>(
    () => ({
      position: 'absolute',
      bottom: 0,
      top: 0,
      width: 75,
      left: 150,
      backgroundColor: 'blue',
    }),
    []
  );

  const RightButton1 = useMemo<StyleProp<ViewStyle>>(
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

  const RightButton2 = useMemo<StyleProp<ViewStyle>>(
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

  const renderHiddenItem = useCallback(({ item }, rowMap) => {
    console.log(item, rowMap);
    return (
      <RowBack>
        <TouchableOpacity
          style={LeftButton1}
          onPress={() => console.log('asd')}
        >
          <Text>1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={LeftButton2}
          onPress={() => console.log('asd')}
        >
          <Text>2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={LeftButton3}
          onPress={() => console.log('asd')}
        >
          <Text>3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={RightButton1}
          onPress={() => console.log('asd')}
        >
          <Text>1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={RightButton2}
          onPress={() => console.log('asd')}
        >
          <Text>2</Text>
        </TouchableOpacity>
      </RowBack>
    );
  }, []);

  const renderItem = useCallback<ListRenderItem<RoomEntity>>(
    ({ item }) => {
      console.log(item);
      return (
        <Pressable onPress={() => console.log(item)} style={Row}>
          <Text>{item.lastMessage}</Text>
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

      <Container>
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
      </Container>
    </SafeAreaContainer>
  );
};

export default memo(ChatList);
