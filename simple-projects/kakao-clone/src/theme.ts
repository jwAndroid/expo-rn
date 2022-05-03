import { Theme } from '@emotion/react';

export const font = {
  YoonGothicBold: require('../assets/font/YoonGothicBold.otf'),
  YoonGothicRegular: require('../assets/font/YoonGothicRegular.otf'),
};

export const icon = {
  chat: require('../assets/icons/chat.png'),
  chatfill: require('../assets/icons/chatfill.png'),
  chatplus: require('../assets/icons/chatplus.png'),
  favorites: require('../assets/icons/favorites.png'),
  favoritesfill: require('../assets/icons/favoritesfill.png'),
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
    YoonGothicBold: 'YoonGothicBold',
    YoonGothicRegular: 'YoonGothicRegular',
  },
  text: '#303030',
  background: '#ffffff',
  itemBackground: '#f0f0f0',
  color: {
    white: '#ffffff',
    thickWhite: '#F9F9F9',
    thickBlack: '#D7D7D7',
    black: '#000000',
    gray: '#808080',
    thickGray: '#71757E',
    red: '#FF0000',
    blue: '#0000FF',
    thickBlue: '#95BBEC',
    yellow: '#ffe400',
    orange: '#EC6C3D',
    dynamic: {
      inActive: '#f0f0f0',
      active: '#2F363C',
      focus: '#0099ff',
      blur: '#303030',
    },
    subtitle: '#848484',
  },
  constants: {
    header: 56,
    paddingLeft: 10,
    paddingRight: 10,
  },
  icon,
};
