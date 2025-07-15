import eslintPluginJsonc from 'eslint-plugin-jsonc';
import markdown from '@eslint/markdown';
import { Linter } from 'eslint';
import tseslint from 'typescript-eslint';
import { importX } from 'eslint-plugin-import-x';
import tsParser from '@typescript-eslint/parser';

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
    importX.flatConfigs.recommended,
    importX.flatConfigs.typescript,
    {
      files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
      languageOptions: {
        parser: tsParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      rules: {
        'import-x/no-dynamic-require': 'warn',
        'import-x/no-nodejs-modules': 'warn',
      },
    },
  ) as Linter.Config[];
