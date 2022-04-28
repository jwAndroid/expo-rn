import { Theme } from '@emotion/react';

export const font = {
  Cafe24Simplehae: require('../assets/font/Cafe24Simplehae.otf'),
};

export const icon = {
  chat: require('../assets/icons/chat.png'),
  chatfill: require('../assets/icons/chatfill.png'),
  chatplus: require('../assets/icons/chatplus.png'),
  headersetting: require('../assets/icons/headersetting.png'),
  kakao: require('../assets/icons/kakao.png'),
  music: require('../assets/icons/music.png'),
  search: require('../assets/icons/search.png'),
  settings: require('../assets/icons/settings.png'),
  settingsfill: require('../assets/icons/settingsfill.png'),
  shopping: require('../assets/icons/shopping.png'),
  shoppingfill: require('../assets/icons/shoppingfill.png'),
  users: require('../assets/icons/users.png'),
  usersfill: require('../assets/icons/usersfill.png'),
  view: require('../assets/icons/view.png'),
  viewfill: require('../assets/icons/viewfill.png'),
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
    thickWhite: '#F9F9F9',
    black: '#000000',
    gray: '#808080',
    red: '#FF0000',
    blue: '#0000FF',
    yellow: '#ffe400',
    dynamic: {
      inActive: '#f0f0f0',
      active: '#2F363C',
      focus: '#0099ff',
      blur: '#303030',
    },
  },
  icon,
};
