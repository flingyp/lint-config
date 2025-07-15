import { isPackageExists } from 'local-pkg';
import type { Linter } from 'eslint';

import commonConfig from '@flypeng/eslint-config-common';
import basicConfig from '@flypeng/eslint-config-basic';
import typeScriptConfig from '@flypeng/eslint-config-typescript';
import vueConfig from '@flypeng/eslint-config-vue';
import reactConfig from '@flypeng/eslint-config-react';
import {
  jsonConfig,
  markdownConfig,
  importConfig,
} from '@flypeng/eslint-config-other';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

const scopeFile = (files: string[], config: Linter.Config[]): Linter.Config[] =>
  config.map((item: Linter.Config) => ({
    ...item,
    files,
  })) as Linter.Config[];

export default (): Linter.Config[] => {
  const lintCommon = commonConfig();
  const lintBasic = basicConfig();
  const lintTypeScript = typeScriptConfig();

  const lintVue = vueConfig();
  const lintReact = reactConfig();

  const eslintConfig: Linter.Config[] = [
    ...lintBasic,
    ...lintCommon,
    ...scopeFile(['**/*.json', '**/*.json5', '**/*.jsonc'], jsonConfig()),
    ...scopeFile(['**/*.md'], markdownConfig()),
  ];

  if (isPackageExists('typescript')) {
    eslintConfig.push(
      ...scopeFile(
        ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
        lintTypeScript,
      ),
    );
  }

  if (isPackageExists('vue')) {
    eslintConfig.push(...scopeFile(['**/*.vue'], lintVue));
  }

  if (isPackageExists('react') && isPackageExists('react-dom')) {
    eslintConfig.push(
      ...scopeFile(
        ['**/*.js', '**/*.jsx', '**/*.mjs', '**/*.cjs', '**/*.ts', '**/*.tsx'],
        lintReact,
      ),
    );
  }

  if (isPackageExists('prettier')) {
    eslintConfig.push(eslintConfigPrettier as Linter.Config);
  }

  eslintConfig.push(...importConfig());

  return eslintConfig;
};
