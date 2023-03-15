// https://eslint.vuejs.org/
module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      extends: [
        'plugin:vue/vue3-recommended',
      ],
      rules: {
        'no-undef': 'off',
        'vue/multi-word-component-names': 'off',
      },
    },
  ],
}
