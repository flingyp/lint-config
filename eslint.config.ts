import init from '@flypeng/eslint-config';
import { Linter } from 'eslint';

// export default (): Linter.Config[] => [
//   ...init(),
//   {
//     ignores: ['**/dist'],
//   },
// ];

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...init(),
  {
    ignores: ['**/dist'],
  },
];
