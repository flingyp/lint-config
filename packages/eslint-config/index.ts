import { isPackageExists } from 'local-pkg';
import type { Linter } from 'eslint';

import basicConfig from '@flypeng/eslint-config-basic';
import javaScriptConfig from '@flypeng/eslint-config-javascript';
import typeScriptConfig from '@flypeng/eslint-config-typescript';
import vueConfig from '@flypeng/eslint-config-vue';
import reactConfig from '@flypeng/eslint-config-react';
import otherConfig from '@flypeng/eslint-config-other';
import prettierConfig from 'eslint-config-prettier';

const scopeFile = (config: any[], files: string[]): Linter.FlatConfig[] =>
  config.map((item) => ({
    ...item,
    files,
  })) as Linter.FlatConfig[];

const lintBasic = basicConfig();
const lintJavaScript = javaScriptConfig();
const lintTypeScript = typeScriptConfig();
const lintVue = vueConfig();
const lintReact = reactConfig();
const { jsonConfig: lintJson, markdownConfig: lintMd } = otherConfig();

const eslintConfig: Linter.FlatConfig[] = [
  ...scopeFile(lintJavaScript, ['**/*.js', '**/*.jsx']),
  ...scopeFile(lintJson, ['**/*.json', '**/*.json5', '**/*.jsonc']),
  ...scopeFile(lintMd, ['**/*.md']),
];

if (isPackageExists('typescript')) {
  eslintConfig.push(
    ...scopeFile(lintTypeScript, [
      '**/*.ts',
      '**/*.tsx',
      '**/*.mts',
      '**/*.cts',
    ]),
  );
}

if (isPackageExists('vue')) {
  eslintConfig.push(...scopeFile(lintVue, ['**/*.vue']));
}

if (isPackageExists('react') && isPackageExists('react-dom')) {
  eslintConfig.push(
    ...scopeFile(lintReact, [
      '**/*.js',
      '**/*.jsx',
      '**/*.mjs',
      '**/*.cjs',
      '**/*.ts',
      '**/*.tsx',
    ]),
  );
}

if (isPackageExists('prettier')) {
  eslintConfig.push(prettierConfig as Linter.FlatConfig);
}

eslintConfig.push(...(lintBasic as Linter.FlatConfig[]));

export default () => eslintConfig;
