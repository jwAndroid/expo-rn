import '@emotion/react';

import { icon } from './theme';

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare module '@emotion/react' {
  export interface Theme {
    font: {
      YoonGothicBold: string;
      YoonGothicRegular: string;
    };
    text: string;
    background: string;
    itemBackground: string;
    color: {
      white: string;
      thickWhite: string;
      thickBlack: string;
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
    constants: {
      header: number;
      paddingLeft: number;
      paddingRight: number;
    };
    icon: typeof icon;
  }
}
