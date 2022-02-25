import React, { memo, useCallback } from 'react';
import { Pressable, Text } from 'react-native';

const MyButton2 = () => {
  const onPress = useCallback(() => {
    console.log('MyButton2');
  }, []);

  return (
    <Pressable onPress={onPress}>
      <Text>My Button2</Text>
    </Pressable>
  );
};

export default memo(MyButton2);
