### Setup

```bash
$ npm install -g expo-cli

$ expo init "project name"
```

### ESLint

```bash
$ npm i -D eslint
$ npx eslint --init
```

### eslint-plugin-hook

```bash
$ npm install eslint-plugin-react-hooks --save-dev
```

```javascript
add eslint hook recomend
  "extends": [
    ...
    "plugin:react-hooks/recommended",
    ...
  ],
add rules
  "rules": {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    ...
  }
```

### Emotion

```bash
$ npm install @emotion/react @emotion/native
```

### Moti

```bash
$ npm install moti

- install Reanimated-2 :
$ expo install react-native-reanimated

- add the Babel-plugin to babel.config.js :
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'],
  };
};

- import Components Moti :
import { MotiView, MotiText, MotiScrollView, MotiSafeAreaView, MotiImage } from 'moti'
```

- [Moti](https://moti.fyi/installation) install

---

### Reference-link

- [Node.js](https://nodejs.org/ko) install , update
- [React Native](https://reactnative.dev)
- [Expo](https://docs.expo.io/get-started/installation) Installation
- [ESLint](https://eslint.org)
  - [No Unused Vars](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md)
- [Hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [Emotion](https://emotion.sh/docs/introduction) introduction , [install](https://emotion.sh/docs/@emotion/native) and [setup](https://emotion.sh/docs/typescript)
- [Axios](https://www.npmjs.com/package/axios)
- [Redux](https://redux.js.org/introduction/installation)
- [react-native-debugger](https://github.com/jhen0409/react-native-debugger/releases) for window
- [redux-logger](https://github.com/LogRocket/redux-logger)
- [npm trands](https://www.npmtrends.com)
- [openbase](https://openbase.com)
- [Public-API](https://github.com/public-apis/public-apis)

---

### Design

- [MUI](https://mui.com/getting-started/usage)
- [Ant](https://ant.design/components/overview)
- [User Interface Component](https://docs.expo.dev/guides/userinterface) introduction
- [Kitten](https://akveo.github.io/react-native-ui-kitten)
- [react-native-elements](https://reactnativeelements.com/docs)
- [Vector-Icons](https://icons.expo.fyi)
- [Google Fonts Icons](https://fonts.google.com/icons)

---

### Flexbox Froggy

- https://flexboxfroggy.com/#ko
