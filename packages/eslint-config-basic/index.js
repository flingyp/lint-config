const basicConfig = [
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    ignores: [
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
  },
];

export default () => basicConfig;
