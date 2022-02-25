import { Image } from 'react-native';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';

export const cacheImages = (images: any) => {
  return images.map((image: any) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    }

    return Asset.fromModule(image).downloadAsync();
  });
};

export const cacheFonts = (fonts: any) => {
  return fonts.map((font: any) => Font.loadAsync(font));
};

// 여기서 엑스포 에셋이랑 ,엑스포 폰트설치
// 그리고 이건 복사해서 씀
// 폰트도 아이콘 처리

// typeof "hello world" 의 리턴값 string 이나옴
