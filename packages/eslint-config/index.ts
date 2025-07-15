import { isPackageExists } from 'local-pkg';
import type { Linter } from 'eslint';

import commonConfig from '@flypeng/eslint-config-common';
import basicConfig from '@flypeng/eslint-config-basic';
import typeScriptConfig from '@flypeng/eslint-config-typescript';
import vueConfig from '@flypeng/eslint-config-vue';
import reactConfig from '@flypeng/eslint-config-react';
import otherConfig from '@flypeng/eslint-config-other';
import prettierConfig from 'eslint-config-prettier';

const scopeFile = (config: any, files: string[]): Linter.Config[] =>
  config.map((item) => ({
    ...item,
    files,
  })) as Linter.Config[];

const lintCommon = commonConfig();
const lintBasic = basicConfig();
const lintTypeScript = typeScriptConfig();
const lintVue = vueConfig();
const lintReact = reactConfig();
const { jsonConfig: lintJson, markdownConfig: lintMd } = otherConfig();

const eslintConfig: Linter.Config[] = [
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
  eslintConfig.push(prettierConfig as Linter.Config);
}

eslintConfig.push(...lintBasic, ...lintCommon);

console.log('eslintConfig:', eslintConfig);

export default () => eslintConfig;
