import React, { memo, useCallback, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import MyButton from './src/components/MyButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// 리액트는 그냥 변수 예를들어서 let x = 0; 이런식으로 절떄 하면안댐
// 그래서 useState가 정확하게 변수라기보다는 상태관리라고 보면된다
// 이걸 하기위해서는 useState() 를 써야한다.
// useState(x) x가 초기값이고, 이 함수를 실행하면 const [count, setCount] = useState(0);
// 배열이 출력되는데 const [count, setCount] 이부분
// 배열의 첫번째 원소 count 는 말그대로 상태값(들어갈값) 이고 setCount 두번쨰는
// 그 상태값을 업데이트하는 함수이다.

// 여기서 용씨가 할말이 너~~~~~~~~~~~~~~~~~~~~~~~~~~~~무 많다고 한다 그만큼 중요함
// 무엇이냐?? 리액트가 동시에 실행되는거
const App = () => {
  const [count, setCount] = useState(0);

  const onPlus = useCallback(() => {
    // setCount(count + 1);
    // setCount(count + 1);
    // 만약에 이렇게 두개를 실행시킨다면? 하나만 실행됨 리액트는 이것까지 다 잡아준다
    // 그럼 실제로 두개를 실행시키고 싶다면? 이렇게 하면된다.
    // 이전상태값을 업데이트 하려면 예를들어서 3이였다가 4로 넘어갈때 4 가 되기 이전의
    // 상태값을 업데이트하려고 할때 이렇게 밑에처럼 하면된다. 그리고  [](디펜던시 라고함)
    // 를 비워주면 된다.
    // 쉽게말해서 prev(or prevState ) ? 그냥 이전값이라고 보면됨. 이전값을 업데이트할때
    // 그리고 관례가 하나있는데 count 업데이트가 된다? setCount 무조건 앞에 set 붙여라

    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    // prev 이해못할꺼같아서 예를들어보면
    // 설문조사 할때 체크버튼 그부분 처음값이 false로 잡아놓았는데 누르면 true 값으로 가지?
    // 이전값 prev 가 false 이고 이값을 업데이트 하고자 한것임.
  }, []);
  const onMinus = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text>{count}</Text>

      <MyButton title="plus" onPress={onPlus} />
      <MyButton title="minus" onPress={onMinus} />
    </View>
  );
};

// 다시한번 말하는데 이렇게 함수정의할떄 유즈콜백 꼭 적어주어야한다
// 그리고 onPress={onPlus} 이런식으로 위 함수 실행시키겠다는거잖아? 누르면 ㅇㅋ?

export default memo(App);
