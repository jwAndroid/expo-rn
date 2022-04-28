import { Theme } from '@emotion/react';

export const font = {
  Cafe24Simplehae: require('../assets/font/Cafe24Simplehae.otf'),
};

export const icon = {
  kakao: require('../assets/icons/kakao.png'),
};

export const lightTheme: Theme = {
  font: {
    Cafe24Simplehae: 'Cafe24Simplehae',
  },
  text: '#303030',
  background: '#ffffff',
  itemBackground: '#f0f0f0',
  color: {
    white: '#ffffff',
    black: '#000000',
    gray: '#808080',
    red: '#FF0000',
    blue: '#0000FF',
    yellow: '#ffe400',
    dynamic: {
      inActive: '#f0f0f0',
      active: '#ffffff',
      focus: '#0099ff',
      blur: '#303030',
    },
  },
  icon,
};
