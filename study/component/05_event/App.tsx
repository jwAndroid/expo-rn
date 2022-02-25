import React, { memo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { MyButton, MyInput } from './src/components';

// import MyButton from './src/components/MyButton';
// import MyInput from './src/components/MyInput';

// 위 6~7라인 보면 같은 소속인데 n개의 줄로되어있지? 이렇게 해놓으면은 임포트되는게 너무 많아지고
// 지저분 해진단말이야
// 그래서 이런것들을 따로 빼서 관리하도록 하는게 "배럴" 이라고해
// 어떻게 하냐면
// 해당 폴더에서 index.ts(이름이 항상 같아야함!!) 만들어주고
// export { default as MyButton } from './MyButton'; 이렇게 부르고싶은 컴포넌트를 불러준다.
// 부르고나서 다시 import 해주면 됨.

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <MyInput />
      <MyButton />
    </View>
  );
};

export default memo(App);
