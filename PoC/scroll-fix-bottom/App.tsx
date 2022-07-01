import { memo, useCallback, useLayoutEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { data } from './src/data';

interface Message {
  id: number;
  message: string;
}

const App = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useLayoutEffect(() => {
    setMessages(data);
  }, []);

  const keyExtractor = useCallback((item) => `${item.id}`, []);

  const renderItem = useCallback(({ item }) => {
    return <Text style={{ fontSize: 25 }}>{item.message}</Text>;
  }, []);

  const onPress = useCallback(() => {
    console.log('전');
    console.log(messages.length);

    const newMessage = {
      id: 898911291,
      message: `${messages.length + 1}`,
    };

    setMessages([newMessage, ...messages]);

    // 정답은 inverted 인데
    // 내려받는 데이터만 잘 가공해주면 된다.
    // setMessages([newMessage, ...messages]); 할때
    // 하단으로 고정되면서 스크롤이 내려간다.
    // 추가로 새로운 데이터도 업데이트된다.
    // 그리고 다시 들어올때 스크롤이 하단에 고정되어져 있다.
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          width: '100%',
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'gray',
          marginTop: 30,
        }}
      >
        <Text style={{ fontSize: 30 }} onPress={onPress}>
          +
        </Text>
      </View>

      <FlatList
        data={messages}
        inverted
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};

export default memo(App);
