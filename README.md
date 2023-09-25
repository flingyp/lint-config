# @flypeng/lint-config

- Single quotes and no semi
- Auto fix for formatting (aimed to be used standalone without Prettier)
- Reasonable defaults, best practices, only one-line of config
- Based on **Airbnb base**
- **Style principle**: Minimal for reading, stable for diff

## Usage

### Install

```bash
pnpm add -D eslint stylelint @flypeng/eslint-config @flypeng/stylelint-config
```

### Config `.eslintrc`、`.stylelintrc`

```json
{
  "extends": "@flypeng"
}
```

```json
{
  "extends": "@flypeng/stylelint-config"
}
```

> You don't need `.eslintignore` normally as it has been provided by the preset.

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint . && stylelint \"**/*.{css,scss,less}\"",
    "lint:fix": "eslint . --fix && stylelint \"**/*.{css,scss,less}\" --fix"
  }
}
```

### Config VS Code auto fix

Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and create `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "stylelint.enable": true,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true,
    "source.organizeImports": false
  },
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
    "yaml"
  ],
  "stylelint.validate": [
    "css",
    "less",
    "scss",
    "sass",
    "html",
    "vue"
  ]
}
```
## Packages

- [@flypeng/eslint-config](https://github.com/flingyp/eslint-config/tree/main/packages/all)
  - ESlint config of packages integration
- [@flypeng/eslint-config-basic](https://github.com/flingyp/eslint-config/tree/main/packages/basic)
  - Javascript code style based on airbnb base
- [@flypeng/eslint-config-typescript](https://github.com/flingyp/eslint-config/tree/main/packages/typescript)
  - TypeScript code style base on [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)
- [@flypeng/eslint-config-vue](https://github.com/flingyp/eslint-config/tree/main/packages/vue)
  - Vue code style base on [eslint-plugin-vue](https://eslint.vuejs.org/)
- [@flypeng/stylelint-config](https://github.com/flingyp/eslint-config/tree/main/packages/stylelint)
  - Style style base on [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)

