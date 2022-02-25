import React, { memo, useCallback } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MyButton from './src/components/MyButton';
import MyButton2 from './src/components/MyButton2';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// xml 이랑 똑같음. 자식이 없으면 버튼처럼 /> 있으면 <Text>로 닫아주기
// 자 ... 일단 버튼 보면은 <Button title="Button" onPress={() => console.log('button')} /> 이부분 잘봐
// <Button 은  onPress={() => console.log('button')} 이렇게 구현되어지는데 이렇게 쓰면 var 쓰는것처럼
// 큰 죄를 짓는것과 똑같음... 이렇게는 쓰지말자 버튼이 어떻게 구현되어지는지만 참고

// 리액트 컴포넌트 생명주기 app을 먼저 실행하지? 달라지는게 있으면 새로만들어줌
// 변화가 없으면 실행을 안함. (memo)
// 객체데이터는 메모리 할당을 다르게함.
// 함수는 매번 실행할떄마다 계속 만들어준다.

// !!!!여기 정말 중요함 리액트의 가장 중요한 핵심기능이라고 보면된다 이글 꼭 읽고 넘어가길 바람!!!!

/* "a" === "a" : 트루
 "false" === "false" : 트루

 {} === {} : false
[] === [] : false
(() => {}) === (() => {}) : false
이런 값이 나온다.
자 그러면 리액트의 핵심은 리얼돔 과 버츄얼돔 사이의 관계를 비교해서 업데이트하는데
리액트는 리얼돔과 버츄얼돔이 다르면 업데이트한다.
아까 만들어두었던 onPress 콜백함수 (콘솔로그) 이 형태는 비효율적이다. (하여튼 쓰지말아라)
그러면 어떻게 해야 함수를 저장할수있을까?? (저장 위치는 어딘가에 저장되니까 이거 본순간 찾아볼것)
그건 리액트 훅스를 써야함. const onPress = useCallback(() => {
    console.log('button');
  }, []);
  이런식으로 useCallback 으로 함수를 저장시켜준다. 이게 리액트 훅 이라는것
  이부분 정말 중요하니까.
  일단 함수쓸때는 유즈콜백으로 모두 쓴다는것.
  지용씨 깃 참고 꼮 하고 , use 들어간거는 전부다 훅스임
  훅스 어떻게 쓴다고??
  *****명언 : "use콜백이 함수를 저장한다"*****
  나중에 가서 배울껀데 useCallback(() => {} , []) 이렇게 쓰지?
  () => {} 함수형태지?? [] 는 나중에 ㄱㄱ 이부분 정말 중요함
  "리액트 네이티브 함수는 use콜백" ==> 아 함수정의해야되네 use콜백으로 시작한다고 그냥 머리에 박아둘것
  https://ko.reactjs.org/docs/hooks-intro.html <<< 다시 볼것
*/

const App = () => {
  const onPress = useCallback(() => {
    console.log('button');
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Button title="Button" onPress={onPress} />
      <MyButton />
      <MyButton2 />
    </View>
  );
};

// 메모는 모든코드가(리턴쪽) 변화가 없어? 그대로 쓰겠다 라는말
// 보통 App 쪽에서 안하고 src/components/MyButton.tsx 에서 보통 컴포넌트(버튼이나 이런것들)을 만들어서 사용한다.
// MyButton 을 클릭했을때 이벤트를 처리해야하는데 이부분은 당연히 MyButton 쪽에서 함수를 만들어서 진행한다
// 함수를 만드는방법은 해당파일가서 확인하면되고 그쪽파일로 가보면
export default memo(App);
