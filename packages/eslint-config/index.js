import { isPackageExists } from 'local-pkg';

import configBasic from '@flypeng/eslint-config-basic';
import configJavaScript from '@flypeng/eslint-config-javascript';
import configTypeScript from '@flypeng/eslint-config-typescript';
import configVue from '@flypeng/eslint-config-vue';
import configPrettier from 'eslint-config-prettier';

const lintBasic = configBasic();
const lintJavaScript = configJavaScript();
const lintTypeScript = configTypeScript();
const lintVue = configVue();

const eslintConfig = [...lintJavaScript];

if (isPackageExists('typescript')) {
  eslintConfig.push(...lintTypeScript);
}

if (isPackageExists('vue')) {
  eslintConfig.push(...lintVue);
}

if (isPackageExists('prettier')) {
  eslintConfig.push(configPrettier);
}

eslintConfig.push(...lintBasic);

export default () => eslintConfig;
