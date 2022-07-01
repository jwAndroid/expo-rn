import { memo, useRef } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { data } from './data';

const ScrollToEnd = () => {
  const scrollViewRef = useRef<ScrollView>(null);

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
        {data.map((item) => {
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

export default memo(ScrollToEnd);
