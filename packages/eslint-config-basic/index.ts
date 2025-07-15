import js from '@eslint/js';
import type { Linter } from 'eslint';

export default (): Linter.Config[] => [
  {
    ...js.configs.recommended,
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
