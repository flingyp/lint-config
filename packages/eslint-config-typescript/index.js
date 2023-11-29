import eslintTsParser from '@typescript-eslint/parser';
import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';

/**
 * TIP: 需要使用 @eslint/eslintrc 将旧配置系统配置转换为新配置系统
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
  },
  {
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
];

export default () => typescriptConfig;
