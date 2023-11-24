import { isPackageExists } from 'local-pkg';

import basicConfig from '@flypeng/eslint-config-basic';
import javaScriptConfig from '@flypeng/eslint-config-javascript';
import typeScriptConfig from '@flypeng/eslint-config-typescript';
import vueConfig from '@flypeng/eslint-config-vue';
import reactConfig from '@flypeng/eslint-config-react';
import prettierConfig from 'eslint-config-prettier';

const lintBasic = basicConfig();
const lintJavaScript = javaScriptConfig();
const lintTypeScript = typeScriptConfig();
const lintVue = vueConfig();
const lintReact = reactConfig();

const scopeFile = (config, files) =>
  config.map((item) => ({
    ...item,
    files,
  }));

const eslintConfig = [...scopeFile(lintJavaScript, ['**/*.js', '**/*.jsx'])];

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

if (isPackageExists('react')) {
  eslintConfig.push(...scopeFile(lintReact, ['**/*.{js,jsx,mjs,cjs,ts,tsx}']));
}

if (isPackageExists('prettier')) {
  eslintConfig.push(prettierConfig);
}

eslintConfig.push(...lintBasic);

export default () => eslintConfig;
