import React, { memo, useCallback } from 'react';

import { Pressable, Text } from 'react-native';

const MyButton = () => {
  const onPress = useCallback(() => {
    console.log('onPress');
  }, []);

  return (
    <Pressable onPress={onPress}>
      <Text>My Button</Text>
    </Pressable>
  );
};

// 함수는 위 처럼 반드시 useCallback 형태로 만들어준다. 그리고 Pressable 쪽에서 같은이름으로
// onPress={onPress} 로 해준다. 이부분이 버튼클릭 이벤트

export default memo(MyButton);

// 그니까 버튼이든 모든 컴포넌트는 이런식으로 폴더구조에 담아주어서 다른곳에서도 동일하게 사용할수있도록 해둔다
// 작성은 처음에 import React, { memo } from 'react'; 해주고
// const MyButton = () =>{} 함수 만들어주고 마지막에 export default memo(MyButton); 해주는데
// 함수명은 반드시 MyButton 파일명과 동일하게 해준다.
// 이렇게 작성후에 다른곳에서도 동일하게 컴포넌트를 작성해주면 된다

/*
import React, { memo } from 'react';
const MyButton = () => {
  return;
};
export default memo(MyButton);
*/
