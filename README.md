# @flypeng/lint-config

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



