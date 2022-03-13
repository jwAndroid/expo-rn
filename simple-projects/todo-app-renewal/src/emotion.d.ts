import '@emotion/react';

import { icon } from './theme';

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare module '@emotion/react' {
  export interface Theme {
    text: string;
    background: string;
    itemBackground: string;
    color: {
      white: string;
      black: string;
      gray: string;
      red: string;
      blue: string;
      dynamic: {
        inActive: string;
        active: string;
      };
    };
    icon: typeof icon;
  }
}
