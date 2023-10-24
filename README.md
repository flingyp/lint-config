# @flypeng/lint-config

![@flypeng/eslint-config](https://img.shields.io/npm/v/%40flypeng%2Feslint-config?style=plastic&logo=npm&label=%40flypeng%2Feslint-config&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40flypeng%2Feslint-config) ![@flypeng/stylelint-config](https://img.shields.io/npm/v/%40flypeng%2Fstylelint-config?style=plastic&logo=npm&label=%40flypeng%2Fstylelint-config&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40flypeng%2Fstylelint-config)

- Single quotes, Semi
- Based on Airbnb code style
- Auto fix and no dependence on Prettier
- Easy integration and configuration, customized rules
- Support for multiple file type code checking

## 🏍️ Packages

- `@flypeng/eslint-config`
  - `@flypeng/eslint-config-javascript`
  - `@flypeng/eslint-config-typescript`
  - `@flypeng/eslint-config-vue`
  - `@flypeng/eslint-config-react`
  - `@flypeng/eslint-config-other`
- `@flypeng/stylelint-config`

## 🏃 How to integrate it

### Install packages

`pnpm add eslint stylelint @flypeng/eslint-config @flypeng/stylelint-config -D`

### Config `.eslintrc`、`.stylelintrc`

```
{
  "extends": "@flypeng/eslint-config"
}
```

```
{
  "extends": "@flypeng/stylelint-config"
}
```

### Config VSCode for auto fix

Install VSCode **ESLint**、**Stylelint** extension and create `.vscode/settings.json`

```json
{
  "eslint.enable": true,
  "eslint.format.enable": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "json5",
    "yaml"
  ],
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "[jsonc]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  }
}
```
