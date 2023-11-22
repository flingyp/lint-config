# @flypeng/lint-config

![@flypeng/eslint-config](https://img.shields.io/npm/v/%40flypeng%2Feslint-config?style=plastic&logo=npm&label=%40flypeng%2Feslint-config&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40flypeng%2Feslint-config) ![@flypeng/stylelint-config](https://img.shields.io/npm/v/%40flypeng%2Fstylelint-config?style=plastic&logo=npm&label=%40flypeng%2Fstylelint-config&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40flypeng%2Fstylelint-config)

> `@flypeng/eslint-config` 目前使用的是ESLint旧的配置系统。[官方文档](https://eslint.org/docs/latest/use/configure/configuration-files)

- Single quotes, Semi
- Share ESLint and Stylelint configurations
- Code lint check based on Airbnb
- Code formatting based on Prettier
- [ESLint Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files-new), compose easily
- Easy to integrate, configuration, and custom rules

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

### Config `.eslintrc` or `eslint.config.js`、`.stylelintrc`

#### `.eslintrc` (ESLint < 9 && Disable eslint new configuration)

```json
{
  "extends": "@flypeng/eslint-config"
}
```

#### `eslint.config.js` (ESLint > 9 && Enable eslint new configuration)

```js
import init from '@flypeng/eslint-config';

export default init();
```

#### `.stylelintrc`

```json
{
  "extends": "@flypeng/stylelint-config"
}
```

### Config `.prettierrc` and `.prettierignore`

```json
{
  "semi": true,
  "singleQuote": true,
  "bracketSpacing": true,
  "printWidth": 120,
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
    "lint": "prettier . --write && eslint . && stylelint \"**/*.{css,scss,vue}\"",
    "lint:fix": "prettier . --write && eslint . --fix && stylelint --fix \"**/*.{css,scss,sass,vue}\""
  }
}
```

### Config VSCode Settings

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
  "eslint.experimental.useFlatConfig": true, // 启用ESLint新的配置系统
  "eslint.format.enable": true,
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

### Config `.editorconfig`

The configuration of.editorconfig is necessary for team development to ensure that the team editor behaves in a consistent style.

```
# EditorConfig helps developers define and maintain consistent
# coding styles between different editors and IDEs
# editorconfig.org

root = true

[*]

# We recommend you to keep these unchanged
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

# Change these settings to your own preference
indent_style = space
indent_size = 4

[*.{ts,tsx,js,jsx,json,css,scss,yml,yaml,html,vue,md}]
indent_size = 2

[*.md]
trim_trailing_whitespace = false
```

### VSCode Extensions

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
