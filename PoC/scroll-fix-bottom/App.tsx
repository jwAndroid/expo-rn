import { memo, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { data } from './src/data';

interface Message {
  id: number;
  message: string;
}

const App = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const scrollViewRef = useRef<ScrollView>(null);

  useLayoutEffect(() => {
    setTimeout(() => {
      setMessages(data);
    }, 3000);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          width: '100%',
          height: 50,
          backgroundColor: 'gray',
          marginTop: 30,
        }}
      />

      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={() => scrollViewRef.current?.scrollToEnd()}
      >
        {messages.map((item) => {
          return (
            <Text key={item.id} style={{ fontSize: 30 }}>
              {item.message}
            </Text>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default memo(App);
