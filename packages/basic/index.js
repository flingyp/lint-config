module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  reportUnusedDisableDirectives: true,
  ignorePatterns: [
    '*.min.*',
    '*.d.ts',
    'CHANGELOG.md',
    'dist',
    'LICENSE*',
    'output',
    'out',
    'coverage',
    'public',
    'temp',
    'package-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '__snapshots__',
    '!.github',
    '!.vitepress',
    '!.vscode',
  ],
  extends: ['eslint:recommended', 'airbnb-base', 'plugin:import/recommended'],
  rules: {
    semi: ['error', 'never'],
    'no-console': 'off',
    'import/extensions': 'off',
    'no-unused-vars': 'warn',
    'max-len': ['error', { code: 120 }],
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true, optionalDependencies: false, peerDependencies: false, bundledDependencies: false,
    }],
  },
}
