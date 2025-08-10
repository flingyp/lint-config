# @flypeng/lint-config

![@flypeng/eslint-config](https://img.shields.io/npm/v/%40flypeng%2Feslint-config?style=plastic&logo=npm&label=%40flypeng%2Feslint-config&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40flypeng%2Feslint-config) ![@flypeng/stylelint-config](https://img.shields.io/npm/v/%40flypeng%2Fstylelint-config?style=plastic&logo=npm&label=%40flypeng%2Fstylelint-config&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40flypeng%2Fstylelint-config)

[English](https://github.com/flingyp/lint-config/blob/main/README.md) | **简体中文**

- 单引号，半角
- 共享 ESLint 和 Stylelint 配置
- 基于 Airbnb 的代码校验
- 基于 Prettier 的代码格式化
- [ESLint Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files-new)，轻松编写
- 易于集成、配置和自定义规则

## 📦 软件包

- `@flypeng/eslint-config`
  - `@flypeng/eslint-config-basic`
  - `@flypeng/eslint-config-typescript`
  - `@flypeng/eslint-config-vue`
  - `@flypeng/eslint-config-react`
  - `@flypeng/eslint-config-other`
- `@flypeng/stylelint-config`

## 🏃 集成

### 安装软件包

`pnpm add eslint stylelint prettier @prettier/plugin-oxc @flypeng/eslint-config @flypeng/stylelint-config -D`

### 配置`.eslintrc`或`eslint.js`、`.stylelintrc`。

#### `.eslintrc` (ESLint < 9 && Disable eslint new configuration)

```json
{
  "extends": "@flypeng/eslint-config"
}
```

#### `eslint.config.mjs` (ESLint > 9 && Enable eslint new configuration)

使用 ESM

- `"type": "module"` in `package.json`

```js
// eslint.config.mjs
import flypeng from '@flypeng/eslint-config';

/** @type {import('eslint').Linter.Config[]} */
export default flypeng();
```

使用 CJS

```js
// eslint.config.js
const flypeng = require('@flypeng/eslint-config').default;

/** @type {import('eslint').Linter.Config[]} */
module.exports = flypeng();
```

#### `.stylelint.config.mjs`

```js
/** @type {import('stylelint').Config} */
export default {
  extends: '@flypeng/stylelint-config',
};
```

### 配置 `.prettierrc` 和 `.prettierignore`

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

### 配置脚本

```json
{
  "scripts": {
    "lint": "prettier . --write && eslint . && stylelint \"**/*.{css,scss,vue}\"",
    "lint:fix": "prettier . --write && eslint . --fix && stylelint --fix \"**/*.{css,scss,sass,vue}\""
  }
}
```

### 配置 VSCode 设置

安装 VSCode **ESLint**、**Stylelint**、**Prettier**、**Prettier ESLint** 插件并创建`.vscode/settings.json`。

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.inlineSuggest.showToolbar": "onHover",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.fixAll.stylelint": "explicit"
  },
  "eslint.enable": true,
  "eslint.useFlatConfig": true, // 启用ESLint新的配置系统
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
  "stylelint.configFile": "../stylelint.config.mjs",
  "stylelint.validate": ["css", "less", "scss", "sass", "vue", "postcss"]
}
```

### 配置 `.editorconfig`

在团队开发中，.editorconfig 的配置是必要的，以确保团队编辑器的行为风格一致。

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

### VSCode 扩展

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

## 🏍️ 重写规则

如果需要重写规则，很可能需要指定文件范围，因为除 `@flypeng/eslint-config-basic` 以外的软件包所使用的规则都是针对特定文件的插件。如果不声明文件范围，就会出现意外错误。

示例

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

## ✍️ 关于使用 Prettier

网上有很多关于使用 Prettier 进行代码格式化的讨论，的确，Prettier 格式化的某些方面有些强制性，导致代码的可读性较差，或者不是你喜欢的代码风格。

其中一篇由 [Anthony Fu](https://github.com/antfu) 撰写的 [Why I don't use Prettier](https://antfu.me/posts/why-not-prettier-zh) 接受了 Prettier 不适用的原因。看看他怎么说。

我为什么要在 `@flypeng/eslint-config` 中启用 Prettier 来处理代码格式？

我主要考虑了两点：

首先，如果你是个人开发者，而且你对整个项目的代码风格有很好的把握，你可以考虑不使用 Prettier，但如果你是团队开发者，你不能保证你的代码风格会被其他团队成员接受，而且会导致整个项目的代码风格五花八门。因此，这时你应该考虑使用 Prettier 来强制统一代码风格。

第二：ESLint 的主要职责是验证代码而非代码格式，因此对于简单的校验和自动修复可以在一定程度上起到启迪格式化的作用。但对于整体项目的代码风格 ESLint 并不能保证，Prettier 的主要职责是统一整体风格。

基于以上两点，我决定开放使用 Prettier。

## ⚙️ 关于 V1 到 V2

V2 是对 V1 的重构，以适应 ESLint 的扁平化配置，并使用 Prettier 作为代码格式化工具。

如果您需要调整 ESLint 的扁平化配置，那么您在内部使用的所有软件包都需要使用新版本的扁平化配置。幸运的是，ESLint 提供了一个适配方案 [eslintrc](https://github.com/eslint/eslintrc)，用于将旧配置转换为新配置。

## 🚀 关于 V2 到 V3

V3 带来了几项重要的更新和优化：

- 使用 TypeScript 重写所有配置包
- 移除了 `@flypeng/eslint-config-javascript` 包，其功能现已集成到 `@flypeng/eslint-config-basic` 中
- 增强了与 ESLint v9 的兼容性
- 改进了对现代 JavaScript 特性的支持
- 优化了规则集，提升了性能和开发者体验
- 将依赖更新到最新的稳定版本

这些变更使配置更加精简，更容易维护，同时跟上 JavaScript 生态系统的最新标准。
