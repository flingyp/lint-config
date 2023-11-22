import { isPackageExists } from 'local-pkg';

import configBasic from '@flypeng/eslint-config-basic';
import configJavaScript from '@flypeng/eslint-config-javascript';
import configTypeScript from '@flypeng/eslint-config-typescript';
import configPrettier from 'eslint-config-prettier';

const lintConfigBasic = configBasic();
const lintConfigJavaScript = configJavaScript();
const lintConfigTypeScript = configTypeScript();

const eslintConfig = [...lintConfigBasic, ...lintConfigJavaScript];

if (isPackageExists('typescript')) {
  eslintConfig.push(...lintConfigTypeScript);
}

if (isPackageExists('prettier')) {
  eslintConfig.push(configPrettier);
}

console.log('eslintConfig->>', eslintConfig);

export default () => eslintConfig;
