import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    backgroundColor: string;
    borderColor: string;
    text: string;
    purple: string;
    blue: string;
  }
}

// declare module '@emotion/react' 해당 모듈을 정의하는것
// .d. 는 정의의 준말
// Theme 이라는걸 정의함
