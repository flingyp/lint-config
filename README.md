# @flypeng/lint-config

![@flypeng/eslint-config](https://img.shields.io/npm/v/%40flypeng%2Feslint-config?style=plastic&logo=npm&label=%40flypeng%2Feslint-config&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40flypeng%2Feslint-config) ![@flypeng/stylelint-config](https://img.shields.io/npm/v/%40flypeng%2Fstylelint-config?style=plastic&logo=npm&label=%40flypeng%2Fstylelint-config&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40flypeng%2Fstylelint-config)

> `@flypeng/eslint-config` 目前使用的是ESLint旧的配置系统。[官方文档](https://eslint.org/docs/latest/use/configure/configuration-files)

- Single quotes, Semi
- Share ESLint and Stylelint configurations
- Code lint check based on Airbnb
- Code formatting based on Prettier
- Easy to integrate, configure, and customize rules

## 🏍️ Packages

- `@flypeng/eslint-config`
  - `@flypeng/eslint-config-javascript`
  - `@flypeng/eslint-config-typescript`
  - `@flypeng/eslint-config-vue`
  - `@flypeng/eslint-config-react`
  - `@flypeng/eslint-config-other`
- `@flypeng/stylelint-config`

## 🏃 Integration

### Install packages

`pnpm add eslint stylelint prettier @flypeng/eslint-config @flypeng/stylelint-config -D`

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

### Config `.prettierrc` and `.prettierignore`

```
{
  "semi": true,
  "singleQuote": true,
  "bracketSpacing": true,
  "vueIndentScriptAndStyle": false
}
```

```
/dist/*
.local
.output.js
/node_modules/**
**/*.svg
**/*.sh
/public/*
**/*.yaml
```

### Config Script

```json
{
  "scripts": {
    "lint": "prettier . --write && eslint . && stylelint .",
    "lint:fix": "prettier . --write && eslint . --fix && stylelint . --fix"
  }
}
```

### Config VSCode

Install VSCode **ESLint**、**Stylelint**、**Prettier**、**Prettier ESLint** plugins and create `.vscode/settings.json`

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  },
  "eslint.enable": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "jsx",
    "tsx",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "json5",
    "yaml"
  ],
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  "stylelint.enable": true,
  "stylelint.validate": ["css", "less", "scss", "sass", "vue", "postcss"]
}
```
