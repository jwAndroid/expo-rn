import React, { memo, useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  TextInput,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';

interface Data {
  id: string;
  text: string;
  text2: string;
}

const data = [
  { id: '1', text: '지웅이', text2: 'a' },
  { id: '2', text: '지웅이123', text2: 'abc' },
  { id: '3', text: '나리', text2: 'bgfd' },
  { id: '4', text: '나리호리', text2: 'qwerr' },
  { id: '5', text: '먹보나리', text2: 'ppp' },
  { id: '6', text: '호랑이', text2: 'kk' },
  { id: '7', text: '방탈출123', text2: 'ass' },
  { id: '8', text: '123', text2: 'tyr' },
  { id: '9', text: '대탈출', text2: 'a123' },
];

const App = () => {
  const [filteredData, setFilteredData] = useState<Data[]>([]);
  const [masterData, setMasterData] = useState<Data[]>([]);

  const [search, setSearch] = useState('');

  useEffect(() => {
    setFilteredData(data);
    setMasterData(data);
  }, []);

  const onPressItem = useCallback(
    (item: Data) => () => {
      console.log(item);
    },
    []
  );

  const renderItem = useCallback<ListRenderItem<Data>>(({ item }) => {
    return <Text onPress={onPressItem(item)}>{item.text}</Text>;
  }, []);

  const serchFilterText = useCallback(
    (text: string) => {
      if (text) {
        const newData = masterData.filter((item) => {
          const itemData = item.text
            ? item.text.toUpperCase()
            : ''.toUpperCase();

          const textData = text.toUpperCase();

          return itemData.indexOf(textData) > -1;
        });

        setFilteredData(newData);

        setSearch(text);
      } else {
        setFilteredData(masterData);

        setSearch(text);
      }
    },
    [masterData]
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        style={{ margin: 10 }}
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      <KeyboardAvoidingView behavior="padding">
        <TextInput
          value={search}
          onChangeText={(text) => serchFilterText(text)}
          style={{ width: '100%', height: 50, backgroundColor: 'gray' }}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default memo(App);
