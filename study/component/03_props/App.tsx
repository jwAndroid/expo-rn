import React, { memo, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MyButton from './src/components/MyButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    marginBottom: 30,
  },
});

const App = () => {
  const onPress = useCallback(() => {
    console.log('hello');
  }, []);

  // 함수가 다르게 동작할수 있으니까 유동적으로 쓴다.
  // ?는
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <MyButton text="jw interface button" onPress={onPress} />
      <MyButton onPress={onPress}>칠드런</MyButton>
    </View>
  );
};

export default memo(App);

// 칠드런 메모
// <MyButton>됐다</MyButton> 이런식으로 자식에다가 "됐다" 라는값을 넣어주고싶을때
// "됐다" 이렇게 받는 프롭스는 리액트 공식적으로 칠드런 이라고 부름.
