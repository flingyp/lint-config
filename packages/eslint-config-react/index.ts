import { Linter } from 'eslint';
import react from 'eslint-plugin-react';
import globals from 'globals';

export default (): Linter.Config[] => [
  {
    ...react.configs.flat.all,
    languageOptions: {
      ...react.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
  {
    rules: {
      'react/jsx-no-literals': 'off',
    },
  },
];
