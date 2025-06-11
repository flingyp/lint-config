import js from '@eslint/js';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
const basicConfig = [
  {
    ...js.configs.recommended,
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  {
    // Config globally ignoring files with ignores
    ignores: [
      '*.min.*',
      '*.d.ts',
      'CHANGELOG.md',
      'dist',
      'dev-dist',
      'LICENSE*',
      'output',
      'out',
      'coverage',
      'public',
      'temp',
      'package-lock.json',
      'pnpm-lock.yaml',
      'yarn.lock',
      '__snapshots__',
      '!.github',
      '!.vitepress',
      '!.vscode',
    ],
  },
  {
    rules: {
      'no-unused-vars': 'warn',
    },
  },
  {
    rules: {
      'no-undef': 'off',
    },
  },
];

export default () => basicConfig;
