# @flypeng/lint-config

![@flypeng/eslint-config](https://img.shields.io/npm/v/%40flypeng%2Feslint-config?style=plastic&logo=npm&label=%40flypeng%2Feslint-config&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40flypeng%2Feslint-config) ![@flypeng/stylelint-config](https://img.shields.io/npm/v/%40flypeng%2Fstylelint-config?style=plastic&logo=npm&label=%40flypeng%2Fstylelint-config&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40flypeng%2Fstylelint-config)

**English** | [简体中文](https://github.com/flingyp/lint-config/blob/main/README.zh-CN.md)

- Single quotes, Semi
- Share ESLint and Stylelint configurations
- Code lint check based on Airbnb
- Code formatting based on Prettier
- [ESLint Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files-new), compose easily
- Easy to integrate, configuration, and custom rules

## 📦 Packages

- `@flypeng/eslint-config`
  - `@flypeng/eslint-config-basic`
  - `@flypeng/eslint-config-typescript`
  - `@flypeng/eslint-config-vue`
  - `@flypeng/eslint-config-react`
  - `@flypeng/eslint-config-other`
- `@flypeng/stylelint-config`

## 🏃 Integration

### Install packages

`pnpm add eslint stylelint prettier @prettier/plugin-oxc @flypeng/eslint-config @flypeng/stylelint-config -D`

### Config `.eslintrc` or `eslint.config.js`、`.stylelintrc`

#### `.eslintrc` (ESLint < 9 && Disable eslint new configuration)

```json
{
  "extends": "@flypeng/eslint-config"
}
```

#### `eslint.config.mjs` (ESLint > 9 && Enable eslint new configuration)

With ESM

- `"type": "module"` in `package.json`

```js
// eslint.config.mjs
import flypeng from '@flypeng/eslint-config';

/** @type {import('eslint').Linter.Config[]} */
export default flypeng();
```

With CJS

```js
// eslint.config.js
const flypeng = require('@flypeng/eslint-config').default;

/** @type {import('eslint').Linter.Config[]} */
module.exports = flypeng();
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
  "vueIndentScriptAndStyle": false,
  "plugins": ["@prettier/plugin-oxc"]
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
  "eslint.enable": true,
  "eslint.useFlatConfig": true, // Enable ESLint new configuration system
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

## 🏍️ Overwrite rules

If you need to rewrite rules, you probably need to specify files scope, because the rules used by packages other than `@flypeng/eslint-config-javascript` are plugins for specific files. If you do not declare the file scope, unexpected errors will occur.

Examples:

```js
// eslint.config.js
import flypeng from '@flypeng/eslint-config';

export default [
  ...flypeng(),
  {
    /**
     * If you do not declare the file Scope, other files will also refer to this rule.
     * But the rules of other files do not use the @ typescript-eslint/eslint-plugin plugin, so an error will be reported during Lint.
     * Reference detail: https://github.com/eslint/eslint/issues/17485
     */
    files: ['**/*.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];
```

## ✍️ About using Prettier

There is a lot of discussion on the web about using Prettier for code formatting, and it is true that some aspects of Prettier's formatting are a bit mandatory, resulting in code that is less readable or not in your preferred style of code.

One of [Why I don't use Prettier](https://antfu.me/posts/why-not-prettier-zh) written by [Anthony Fu](https://github.com/antfu) accepts why Prettier is not applicable. See what he has to say.

Why did I enable Prettier for code formatting in `@flypeng/eslint-config`?

There are two main things I took into account:

First, if you are an individual developer and you have a good grasp of the overall project code style, you can consider not using Prettier, but if you are a team developer, you can't guarantee that your code style will be accepted by the other team members and it will lead to a variety of code styles for the project as a whole. So this time you should consider using Prettier to force the unified code style.

Second: ESLint main responsibility is to verify the code rather than the code format , so for simple checksum automatic repair can be a certain degree of enlightenment to the role of formatting . But for the overall project code style ESLint does not guarantee that Prettier's main responsibility is to unify the overall style.

Based on the above two points, I decided to open the use of Prettier.

## ⚙️ About V1 to V2

V2 is a refactoring of V1 in order to adapt ESLint's flat configuration and use Prettier as a code formatting tool.

If you need to adapt ESLint's flattened configuration, then all the packages you use internally need to use the new version of the flattened configuration. Fortunately, ESLint has provided an adaptation scheme, [eslintrc](https://github.com/eslint/eslintrc), to convert the old configuration to the new one.
