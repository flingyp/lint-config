# @flypeng/lint-config

- Single quotes and no semi
- Auto fix for formatting, aimed to be used standalone without Prettier
- Reasonable defaults config, best practices
- Based on Airbnb base
- Minimal for reading, stable for diff, standardize code format

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

> `.eslintignore` normally as it has been provided by the preset.  But `.stylelintignore` needs a custom definition

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

### Add `.stylelintignore`

`.stylelintignore` doesn't do a good job of omitting specified directories that it doesn't need to check, so it needs to be customized

Reference document: https://stylelint.io/user-guide/configure#ignorefiles

```
dist
node_modules
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
- [@flypeng/stylelint-config](https://github.com/flingyp/eslint-config/tree/main/packages/stylelint)
  - Stylelint config of packages integration
- [@flypeng/eslint-config-basic](https://github.com/flingyp/eslint-config/tree/main/packages/basic)
  - Javascript code style based on airbnb base
- [@flypeng/eslint-config-typescript](https://github.com/flingyp/eslint-config/tree/main/packages/typescript)
  - TypeScript code style base on [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)
- [@flypeng/eslint-config-vue](https://github.com/flingyp/eslint-config/tree/main/packages/vue)
  - Vue code style base on [eslint-plugin-vue](https://eslint.vuejs.org/)
