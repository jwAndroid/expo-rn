import { Theme } from '@emotion/react';

export const font = {
  Cafe24Simplehae: require('../assets/font/Cafe24Simplehae.otf'),
};

export const icon = {
  check: require('../assets/icons/check.png'),
  delete: require('../assets/icons/delete.png'),
  edit: require('../assets/icons/edit.png'),
  uncheck: require('../assets/icons/uncheck.png'),
  listCheckActive: require('../assets/icons/list-check-active.png'),
  listCheckedInActive: require('../assets/icons/list-check-inactive.png'),
  binActive: require('../assets/icons/bin-active.png'),
  binInActive: require('../assets/icons/bin-inactive.png'),
  box: require('../assets/icons/box.png'),
  checked: require('../assets/icons/checked.png'),
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
    dynamic: {
      inActive: '#f0f0f0',
      active: '#ffffff',
    },
  },
  icon,
};
