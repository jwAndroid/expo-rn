import React, { FC, memo, useCallback } from 'react';
import { Pressable, Text } from 'react-native';

interface IMyButton2 {
  text: string;
}

const MyButton2: FC<IMyButton2> = ({ text }) => {
  const onPress = useCallback(() => {
    console.log(`press2${text}`);
  }, []);

  return (
    <Pressable onPress={onPress}>
      <Text>Hello Button2</Text>
    </Pressable>
  );
};

export default memo(MyButton2);
