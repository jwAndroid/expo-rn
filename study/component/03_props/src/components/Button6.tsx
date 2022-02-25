import React, { FC, useCallback, memo } from 'react';
import { Pressable, Text } from 'react-native';

interface IButton6 {
  mText: string;
}

const Button6: FC<IButton6> = ({ mText }) => {
  const onPress = useCallback(() => {
    console.log(mText);
  }, []);

  return (
    <Pressable onPress={onPress}>
      <Text>입력해주세요.</Text>
    </Pressable>
  );
};

export default memo(Button6);
