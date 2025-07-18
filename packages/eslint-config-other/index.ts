import { Linter } from 'eslint';
import eslintPluginJsonc from 'eslint-plugin-jsonc';
import markdown from '@eslint/markdown';
import importPlugin from 'eslint-plugin-import';
import tseslint from 'typescript-eslint';

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

export const importConfig = (): Linter.Config[] =>
  tseslint.config(
    {
      files: ['**/*.{js,mjs,cjs}'],
      languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      extends: [importPlugin.flatConfigs.recommended],
    },
    {
      files: ['**/*.{ts,tsx}'],
      extends: [
        importPlugin.flatConfigs.recommended,
        importPlugin.flatConfigs.typescript,
      ],
    },
    {
      rules: {
        'import/no-unresolved': 'off',
      },
    },
  ) as Linter.Config[];
