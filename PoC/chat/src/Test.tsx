import React, { memo, useCallback, useEffect, useState } from 'react';
import { FlatList, Text, TextInput, View } from 'react-native';

interface TYPE {
  id: number;
  message: string;
}

const sample = [
  {
    id: 1,
    message: 'asegeasg',
  },
  {
    id: 2,
    message: 'asegasegasegsaeg',
  },
  {
    id: 3,
    message: 'asegsaegas',
  },
  {
    id: 4,
    message: 'asegsaegse',
  },
];

function Test() {
  const [value, setValue] = useState('');

  const [data, setData] = useState<TYPE[]>([]);

  useEffect(() => {
    setData(sample);
  }, []);

  const keyExtractor = useCallback((item) => `${item.id}`, []);

  const renderItem = useCallback(({ item }) => {
    return <Text>{item.message}</Text>;
  }, []);

  const onChangeText = useCallback((text: string) => {
    setValue(text);
  }, []);

  const onSubmitEditing = useCallback(() => {
    console.log('onsub');
    const obj = { id: 5, message: value };

    setData([...data, obj]);
  }, [data, value]);

  return (
    <View style={{ flex: 1, paddingTop: 30 }}>
      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />

      <TextInput
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        style={{ width: '100%', height: 50, backgroundColor: 'skyblue' }}
      />
    </View>
  );
}

export default memo(Test);
