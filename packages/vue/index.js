// https://eslint.vuejs.org/
module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {

      },
    },
  ],
  extends: [
    'plugin:vue/vue3-recommended',
  ],
}
