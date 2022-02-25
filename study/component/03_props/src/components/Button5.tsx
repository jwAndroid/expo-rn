import React, { FC, useCallback, memo } from 'react';
import { Pressable, Text } from 'react-native';

interface IButton5 {
  btnName: string;
  isChange?: boolean;
}

const Button5: FC<IButton5> = ({ btnName, isChange }) => {
  const onPress = useCallback(() => {
    console.log(isChange);
  }, []);
  return (
    <Pressable onPress={onPress}>
      <Text>{btnName}</Text>
    </Pressable>
  );
};

export default memo(Button5);
