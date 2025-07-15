# @flypeng/eslint-config-other

> 其他文件类型的 ESLint 配置，包括 JSON、YAML、Markdown 等

## 特性

- 使用 TypeScript 重写
- 支持 ESLint 扁平配置（Flat Config）
- 提供更好的类型支持
- 支持多种非 JavaScript/TypeScript 文件类型

## 包含规则

- JSON/JSONC/JSON5 规则
- YAML 规则
- Markdown 规则
- HTML 规则

## 依赖包

本配置包使用以下插件：

- [eslint-plugin-jsonc](https://github.com/ota-meshi/eslint-plugin-jsonc) - 提供针对 JSON/JSONC/JSON5 文件的代码规范检查
- [jsonc-eslint-parser](https://github.com/ota-meshi/jsonc-eslint-parser) - JSON, JSONC 和 JSON5 解析器
- [eslint-plugin-markdown](https://github.com/eslint/eslint-plugin-markdown) - 检测 Markdown 文档中的代码块
- [eslint-plugin-yml](https://github.com/ota-meshi/eslint-plugin-yml) - YAML 文件的 ESLint 插件
- [yaml-eslint-parser](https://github.com/ota-meshi/yaml-eslint-parser) - YAML 解析器
- [eslint-plugin-html](https://github.com/BenoitZugmeyer/eslint-plugin-html) - HTML 文件中的脚本检查
