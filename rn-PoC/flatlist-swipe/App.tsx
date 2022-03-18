import { memo, useCallback, useMemo, useState } from 'react';
import {
  ListRenderItem,
  StyleProp,
  TouchableHighlight,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SwipeListView } from 'react-native-swipe-list-view';
import styled from '@emotion/native';

import { ITEM_LIST } from './src/itemList';
import { IItem } from './type';

const StyledText = styled.Text({
  fontSize: 16,
  color: '#fff',
});

const RowBack = styled.View({
  alignItems: 'center',
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingLeft: 5,
  backgroundColor: '#000000',
});

const App = () => {
  const [listData, setListData] = useState<IItem[]>(ITEM_LIST);

  const safeAreaContainer = useMemo<StyleProp<ViewStyle>>(
    () => ({
      flex: 1,
    }),
    []
  );

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
      const prevIndex = listData.findIndex((item) => item.key === rowKey);
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
            onPress={closeItem(rowMap, item.key)}
          >
            <StyledText>Close</StyledText>
          </TouchableOpacity>
          <TouchableOpacity
            style={[actionButton, deleteButton]}
            onPress={deleteItem(rowMap, item.key)}
          >
            <StyledText>Delete</StyledText>
          </TouchableOpacity>
        </RowBack>
      );
    },
    [deleteItem, closeItem, actionButton, deleteButton, closeButton]
  );

  const renderItem = useCallback<ListRenderItem<IItem>>(
    ({ item }) => {
      return (
        <TouchableHighlight onPress={onPressItem(item)} style={rowFront}>
          <StyledText>
            텍스트:{item.text} / 키:{item.key}
          </StyledText>
        </TouchableHighlight>
      );
    },
    [onPressItem, rowFront]
  );

  return (
    <SafeAreaView style={safeAreaContainer}>
      <SwipeListView
        data={listData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={0}
        disableRightSwipe
        stopRightSwipe={-150}
        rightOpenValue={-150}
        previewRowKey="0"
        previewOpenValue={-40}
        previewOpenDelay={3000}
        onRowDidOpen={onItemOpen}
      />
    </SafeAreaView>
  );
};

export default memo(App);
