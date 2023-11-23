import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';
import vueParser from 'vue-eslint-parser';
import eslintTsParser from '@typescript-eslint/parser';

// module.exports = {
//   overrides: [
//     {
//       files: ['*.vue'],
//       parser: 'vue-eslint-parser',
//       parserOptions: {
//         parser: '@typescript-eslint/parser',
//       },
//       extends: ['plugin:vue/vue3-recommended'],
//       rules: {
//         'vue/multi-word-component-names': 'off',
//       },
//     },
//   ],
// };

const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);

const compat = new FlatCompat({
  baseDirectory: dirName,
});

const vueConfig = [
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: eslintTsParser,
      },
    },
  },
  ...compat.plugins('eslint-plugin-vue'),
];

export default () => vueConfig;
