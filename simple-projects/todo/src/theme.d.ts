import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    background: string;
    itemBackground: string;
    text: string;
    done: string;
  }
}

// declare module '@emotion/react' "text" text 모듈을 정의하고
// 그중 Theme 을 재정의해서 export 하는것.

// src/theme.ts 가 theme.d.ts 를 호출하는데 이렇게 위에 있어야 호출이 가능하다.
// 소스코드는 반드시 src로 가야한다. App.tsx 빼고
// 잘 동작하는지 확인하려면 interface 안쪽 정의한것을 하나빼면 에러가난다.
