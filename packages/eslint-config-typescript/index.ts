import { configs } from 'typescript-eslint';
import { Linter } from 'eslint';
import globals from 'globals';

const config = configs.recommended as Linter.Config[];

export default (): Linter.Config[] =>
  config.concat(
    {
      languageOptions: {
        ecmaVersion: 'latest', // 使用最新的 ECMAScript 版本
        sourceType: 'module', // 代码使用 ES6 模块
        globals: {
          ...globals.browser, // 浏览器环境全局变量（如 window、document）
          ...globals.node, // Node.js 环境全局变量（如 process、__dirname）
          ...globals.es2020, // ES2020 全局变量
        },
      },
    },
    {
      rules: {
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn',
      },
    },
  );
