import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    text: string;
    background: string;
    color: {
      white: string;
      black: string;
      gray: string;
    };
    inActive: string;
    active: string;
  }
}
