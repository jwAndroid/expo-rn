### Setup

```bash
$ expo init "project name"
```

### ESLint

```bash
$ npm i -D eslint
$ npx eslint --init
```

### Emotion

```bash
$ npm install @emotion/react @emotion/native
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
