import React, { useCallback, FC, memo } from 'react';
import { Pressable, Text } from 'react-native';

interface IMyButton4 {
  isOk?: boolean;
  btnName: string;
  maginTop: number;
}

const MyButton4: FC<IMyButton4> = ({ isOk = false, btnName, maginTop }) => {
  const onPress = useCallback(() => {
    console.log(`buttonSwitch:${isOk} / btnName:${btnName} / maginTop:${maginTop}`);
  }, []);

  return (
    <Pressable onPress={onPress}>
      <Text>{btnName}</Text>
    </Pressable>
  );
};

export default memo(MyButton4);
