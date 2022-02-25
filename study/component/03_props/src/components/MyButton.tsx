import React, { FC, memo, ReactNode } from 'react';
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'pink',
    borderRadius: 10,
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});

// 위에있는걸 하려면 css 를 해야함.

// 자식이 뭘로 들어올지 모르기 때문에 전체(companion object) 처럼 생각? 하면된다.
// 그게 ReactNode 타입이다.
// 여기서 ReactNode 를 다 쓰면 되는거 아닌가? 라고 생각할수도있는데 그건 잘못된 방식임
// 왜냐면 그러면 타입스크립트를 쓰는 의미도 없고 같이 일하는사람도 짜증나고 하여튼 쓰지말자.

interface IMyButton {
  children?: ReactNode;
  text?: string;
  isOK?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
}
// (event: GestureResponderEvent) => void; 이건 밑에 onPress 마우스 올려보면 타입나와있음.

// text, isOK = false
const MyButton: FC<IMyButton> = ({ children, text, onPress }) => {
  // const onPress = useCallback(() => {
  //   console.log('Mybutton click');
  // }, []);
  // 이렇게 위에다 썻는데 밖에서 받아와야 하는경우?

  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text || children}</Text>
    </Pressable>
  );
};

export default memo(MyButton);
