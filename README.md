# @flypeng/eslint-config

- Single quotes and no semi
- Auto fix for formatting (aimed to be used standalone without Prettier)
- Reasonable defaults, best practices, only one-line of config
- Based on **Airbnb base**
- **Style principle**: Minimal for reading, stable for diff

## Usage

### Install

```bash
pnpm add -D eslint @flypeng/eslint-config
```

### Config `.eslintrc`

```json
{
  "extends": "@flypeng"
}
```

> You don't need `.eslintignore` normally as it has been provided by the preset.

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### Config VS Code auto fix

Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and create `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
## Packages

- [@flypeng/eslint-config](https://github.com/flingyp/eslint-config/tree/main/packages/all)
  - ESlint config of packages integration
- [@flypeng/eslint-config-basic](https://github.com/flingyp/eslint-config/tree/main/packages/basic)
  - Javascript code style based on airbnb base
- [@flypeng/eslint-config-typescript](https://github.com/flingyp/eslint-config/tree/main/packages/typescript)
  - TypeScript code style base on [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)
