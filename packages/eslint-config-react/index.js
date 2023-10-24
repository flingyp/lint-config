module.exports = {
  overrides: [
    {
      files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
      extends: ['plugin:react/recommended', 'plugin:react/jsx-runtime'],
      plugins: ['react'],
      rules: {
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
  ],
};
