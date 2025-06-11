import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';
import vueParser from 'vue-eslint-parser';
import eslintTsParser from '@typescript-eslint/parser';

/**
 * TIP: 需要使用 @eslint/eslintrc 将旧配置系统配置转换为新配置系统
 * https://eslint.org/docs/latest/use/configure/migration-guide#using-eslintrc-configs-in-flat-config
 * https://github.com/vuejs/eslint-plugin-vue/issues/1291
 */

const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);

const compat = new FlatCompat({
  baseDirectory: dirName,
});

/** @type {import('eslint').Linter.Config[]} */
const vueConfig = [
  ...compat.plugins('eslint-plugin-vue'),
  ...compat.extends('plugin:vue/vue3-recommended'),
  {
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: eslintTsParser,
      },
    },
  },
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-unused-vars': 'off',
    },
  },
];

export default () => vueConfig;
