import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    text: string;
    color: {
      white: string;
      black: string;
    };
  }
}
