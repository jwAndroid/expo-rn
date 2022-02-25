import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
// 색은 밑으로 내리는편
// 1. JSX : 리턴 안쪽을 JSX라고 한다. 즉 , 안쪽을 JSX문법에 맞게 작성해야한다.
// 2. html + JavaScript 그런느낌이다. name 이라는값이 <태그> 뷰 안쪽에서 접근이 가능하다는것. 단 {} 가 있어야함.
// 3. IF문은 안되고 , 3항연산자만 가능하다.
// 4. 정확하게 태그는아니고 , 태그처럼 보일뿐이다. 얘네들이 브릿지랑 통신하는거임
// <View> 는 리니어 , 렐러티브 , 컨스트레인트 와 통신하는느낌 === div랑 똑같다.
// 리액트 네이티브는 실행시 밑에 App 이 가장먼저 실행된다.
// <View> 이런것들은 모두 컴퍼넌트라고 부른다. 꼭 기억해둘것!

const App = () => {
  const name = 'Expo';

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <Text>{name === 'Expo' ? 'A' : 'B'}</Text>
      {name === 'Expo' && <Text>Expo1</Text>}
      {name !== 'Expo' && <Text>Expo2</Text>}
    </View>
  );
};

export default memo(App);
