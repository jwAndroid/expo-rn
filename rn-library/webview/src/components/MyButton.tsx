import React, { useCallback, memo } from 'react';
import { Pressable } from 'react-native';

const MyButton = () => {
  const onPress = useCallback(() => {
    console.log('asd');
  }, []);

  return <Pressable onPress={onPress} />;
};

export default memo(MyButton);
