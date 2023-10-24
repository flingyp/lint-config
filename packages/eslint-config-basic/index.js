module.exports = {
  rules: {
    'no-undef': 'off',
    'no-console': 'off',
    'no-tabs': 'off',
    'no-multi-assign': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-shadow': 'warn',
    'no-underscore-dangle': 'warn',
    'no-unused-vars': 'warn',
    'no-unused-expressions': 'off',
    'no-useless-escape': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'array-callback-return': 'off',
    'consistent-return': 'off',
    'guard-for-in': 'off',
    'func-names': 'off',
    eqeqeq: 'warn',
    'max-len': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
        bundledDependencies: false,
      },
    ],
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: true,
        allowNamedExports: true,
      },
    ],
  },
};
