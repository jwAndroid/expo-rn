import React, { FC, useCallback, memo } from 'react';
import { Pressable, Text } from 'react-native';

interface IAlbumButton {
  name: string;
}

const AlbumButton: FC<IAlbumButton> = ({ name }) => {
  const onPress = useCallback(() => {
    console.log(`name:${name}`);
  }, [name]);

  return (
    <Pressable onPress={onPress}>
      <Text>{name}</Text>
    </Pressable>
  );
};

export default memo(AlbumButton);
