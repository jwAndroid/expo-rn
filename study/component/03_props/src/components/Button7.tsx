import React, { FC, useCallback, memo } from 'react';
import { Pressable, Text } from 'react-native';

interface IButton7 {
  srt: string;
}

const Button7: FC<IButton7> = ({ srt }) => {
  const onPress = useCallback(() => {
    const name = srt;
    if (name === '지웅') console.log('저는 지웅입니다.');
    else console.log('저는 지웅이가 아닙니다.');
  }, []);
  return (
    <Pressable onPress={onPress}>
      <Text>이름은?</Text>
    </Pressable>
  );
};

export default memo(Button7);
