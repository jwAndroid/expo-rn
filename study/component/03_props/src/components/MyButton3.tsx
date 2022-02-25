import React, { FC, useCallback, memo } from 'react';
import { Pressable, Text } from 'react-native';

interface IMyButton3 {
  text: string;
  text2: string;
  numbers: number;
}

const MyButton3: FC<IMyButton3> = ({ text, text2, numbers }) => {
  const onPress = useCallback(() => {
    console.log(`text1 ${text} text2 ${text2} number ${numbers}`);
  }, []);

  return (
    <Pressable onPress={onPress}>
      <Text>press</Text>
    </Pressable>
  );
};

export default memo(MyButton3);
