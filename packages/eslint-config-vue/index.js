import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';
import vueParser from 'vue-eslint-parser';
import eslintTsParser from '@typescript-eslint/parser';

// eslint-plugin-vue to support Flat Config: https://github.com/vuejs/eslint-plugin-vue/issues/1291

const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);

const compat = new FlatCompat({
  baseDirectory: dirName,
});

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
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-unused-vars': 'off',
    },
  },
];

export default () => vueConfig;
