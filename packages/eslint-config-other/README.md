# @flypeng/eslint-config-other

> 其他文件类型的 ESLint 配置，包括 JSON、Markdown 等

## 特性

- 使用 TypeScript 重写
- 支持 ESLint 扁平配置（Flat Config）
- 提供更好的类型支持
- 支持多种非 JavaScript/TypeScript 文件类型

## 包含规则

- JSON/JSONC/JSON5 规则
- Markdown 规则
- Import 相关规则

## 依赖包

本配置包使用以下插件：

- [eslint-plugin-jsonc](https://github.com/ota-meshi/eslint-plugin-jsonc) - 提供针对 JSON/JSONC/JSON5 文件的代码规范检查
- [@eslint/markdown](https://github.com/eslint/eslint-plugin-markdown) - 检测 Markdown 文档中的代码块
- [eslint-plugin-import-x](https://github.com/un-ts/eslint-plugin-import-x) - 提供 import/export 语句的规则支持
- [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint) - TypeScript 解析器
- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) - TypeScript ESLint 工具链
