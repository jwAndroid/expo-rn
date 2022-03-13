import { Theme } from '@emotion/react';

export const icon = {
  check: require('../assets/icons/check.png'),
  delete: require('../assets/icons/delete.png'),
  edit: require('../assets/icons/edit.png'),
  uncheck: require('../assets/icons/uncheck.png'),
  listCheck: require('../assets/icons/list-check-active.png'),
  listChecked: require('../assets/icons/list-check-inactive.png'),
  binActive: require('../assets/icons/bin-active.png'),
  binInActive: require('../assets/icons/bin-inactive.png'),
};

export const lightTheme: Theme = {
  text: '#303030',
  background: '#ffffff',
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
