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
      green: string;
      thickGray: string;
      red: string;
      blue: string;
      skyblue: {
        one: string;
        two: string;
        three: string;
      };
      thickBlue: string;
      yellow: string;
      orange: string;
      dynamic: {
        inActive: string;
        active: string;
        focus: string;
        blur: string;
      };
      subtitle: string;
      subText: string;
    };
    constants: {
      header: number;
      paddingLeft: number;
      paddingRight: number;
    };
    icon: typeof icon;
  }
}
