import tseslint from 'typescript-eslint';
import { Linter } from 'eslint';

const config = tseslint.configs.recommended as Linter.Config[];

export default (): Linter.Config[] =>
  config.concat({
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  });
