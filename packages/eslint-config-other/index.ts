import eslintPluginJsonc from 'eslint-plugin-jsonc';
import markdown from '@eslint/markdown';
import { Linter } from 'eslint';

export const jsonConfig = (): Linter.Config[] => [
  ...eslintPluginJsonc.configs['flat/recommended-with-jsonc'],
  {
    rules: {},
  },
];

export const markdownConfig = (): Linter.Config[] => [
  ...markdown.configs.processor,
  {
    rules: {
      'no-irregular-whitespace': 'off',
    },
  },
];
