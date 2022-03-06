import { Theme } from '@emotion/react';

export const icon = {
  check: require('../assets/icons/check.png'),
  delete: require('../assets/icons/delete.png'),
  edit: require('../assets/icons/edit.png'),
  uncheck: require('../assets/icons/uncheck.png'),
};

export const lightTheme: Theme = {
  text: '#303030',
  background: '#E2E2E2',
  color: {
    white: '#ffffff',
    black: '#000000',
    gray: '#808080',
    red: '#FF0000',
    blue: '#0000FF',
    dynamic: {
      inActive: '#ffffff',
      active: '#fafafa',
    },
  },
  icon,
};
