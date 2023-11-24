import eslintTsParser from '@typescript-eslint/parser';
import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';

/**
 * TIP: eslint-config-airbnb-base 目前还不支持ESLint的新配置系统，需要使用 @eslint/eslintrc 将旧配置系统配置转换为新配置系统
 * https://eslint.org/docs/latest/use/configure/migration-guide#using-eslintrc-configs-in-flat-config
 */

const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);
const compat = new FlatCompat({
  baseDirectory: dirName,
});

const typescriptConfig = [
  ...compat.plugins('@typescript-eslint'),
  ...compat.extends('plugin:@typescript-eslint/recommended'),
  {
    languageOptions: {
      parser: eslintTsParser,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
];

export default () => typescriptConfig;
