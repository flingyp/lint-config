# @flypeng/lint-config

一个统一的 lint 配置合集，包含 ESLint 和 Stylelint 的各种配置。

## 版本 3.0 特性

- 使用 TypeScript 重写所有配置包
- 使用 Tsup 进行构建
- 所有 ESLint 配置包均支持扁平配置（Flat Config）
- 提供更好的类型支持

## 包列表

- **eslint-config**: 主 ESLint 配置包，整合了所有其他 ESLint 配置
- **eslint-config-basic**: 基础 ESLint 配置
- **eslint-config-javascript**: JavaScript 专用 ESLint 配置
- **eslint-config-typescript**: TypeScript 专用 ESLint 配置
- **eslint-config-vue**: Vue 专用 ESLint 配置
- **eslint-config-react**: React 专用 ESLint 配置
- **eslint-config-other**: 其他文件类型（如 JSON、Markdown 等）的 ESLint 配置
- **stylelint-config**: Stylelint 配置包

## 安装

```bash
# 使用 npm
npm install @flypeng/eslint-config @flypeng/stylelint-config -D

# 使用 pnpm
pnpm add @flypeng/eslint-config @flypeng/stylelint-config -D

# 使用 yarn
yarn add @flypeng/eslint-config @flypeng/stylelint-config -D
```

## 使用方法

### ESLint 配置（扁平配置）

创建 `eslint.config.js` 文件：

```js
// eslint.config.js
import flypengESLintConfig from '@flypeng/eslint-config';

export default flypengESLintConfig();
```

### Stylelint 配置

创建 `.stylelintrc.js` 文件：

```js
// .stylelintrc.js
import flypengStylelintConfig from '@flypeng/stylelint-config';

export default flypengStylelintConfig;
```

## 开发

```bash
# 安装依赖
pnpm install

# 构建
pnpm build

# 开发构建（监视模式）
pnpm dev
```

## 发布

```bash
# 创建变更集
pnpm changeset

# 发布
pnpm release
```

## 许可证

MIT
