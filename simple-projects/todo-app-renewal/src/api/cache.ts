import { Image } from 'react-native';
import { Asset } from 'expo-asset';

export const cacheImages = (source: { [name: string]: string | number }) => {
  return Object.values(source).map((value) => {
    return typeof value === 'string'
      ? Image.prefetch(value)
      : Asset.fromModule(value).downloadAsync();
  });
};

// [ { key : value } , {} , {} ] ...
// Object.values(source) => [val , val , val ...].map()
