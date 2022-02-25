import React, { memo, useCallback, useState } from 'react';
import styled from '@emotion/native';

import Button from './Button';

const StyledText = styled.Text({
  fontSize: 25,
  margin: 10,
});

const Counter = () => {
  const [count, setCount] = useState(0);
  // 유즈 스테이트 변수
  // 바뀌는걸 인지하려면 디펜던시에 넣어주어야한다.
  // 안쓰면 캐싱되어져서 값이 안바뀐다.
  // 디펜던시는 [x] x에 변화가 일어나면 onPlus= useCallback() 함수를 다시 만들겠다 라는것.

  // count == 10 이라치면 setCount(10 + 1); setCount(10 + 1); 상태저장하는게 똑같음.
  /*
    setCount(count + 1);
    setCount(count + 1);

    이렇게 이전값을 쓸일이 있을때는
      const onPlus = useCallback(() => {
      setCount((prev) => prev + 1);
      setCount((prev) => prev + 1);
    를 쓴다.
    처음 count === 10 이고
    setCount((10) => 10 + 1);
    setCount((11) => 11 + 1);
    이렇게 되는거라고 보면됨
  }, []);

  그리고 초기값 설정할때 { a: '' } 이런식으로도 쓸수있다.
  */
  const onPlus = useCallback(() => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }, []);

  const onMinus = useCallback(() => {
    setCount((prev) => prev - 1);
    setCount((prev) => prev - 1);
  }, []);

  return (
    <>
      <StyledText>{`counter: ${count}`}</StyledText>

      <Button onPress={onPlus}>+</Button>
      <Button onPress={onMinus}>-</Button>
    </>
  );
};

export default memo(Counter);
