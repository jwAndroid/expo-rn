import '@emotion/react';

import { icon } from './theme';

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare module '@emotion/react' {
  export interface Theme {
    font: {
      Cafe24Simplehae: string;
    };
    text: string;
    background: string;
    itemBackground: string;
    color: {
      white: string;
      thickWhite: string;
      black: string;
      gray: string;
      red: string;
      blue: string;
      yellow: string;
      dynamic: {
        inActive: string;
        active: string;
        focus: string;
        blur: string;
      };
    };
    icon: typeof icon;
  }
}
