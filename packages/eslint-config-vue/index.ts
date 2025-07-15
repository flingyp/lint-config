import { Linter } from 'eslint';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import vueParser from 'vue-eslint-parser';
import typescriptEslint from 'typescript-eslint';

export default (): Linter.Config[] => [
  ...pluginVue.configs['flat/recommended'],
  ...pluginVue.configs['flat/essential'],
  ...pluginVue.configs['flat/strongly-recommended'],
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parser: vueParser,
      parserOptions: {
        parser: typescriptEslint.parser,
      },
    },
  },
  {
    rules: {
      'vue/no-unused-vars': 'warn',
    },
  },
];
