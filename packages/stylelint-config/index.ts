import { isPackageExists } from 'local-pkg';
import type { Config } from 'stylelint';

const extendsList: string[] = ['stylelint-config-standard'];

if (isPackageExists('scss')) extendsList.push('stylelint-config-standard-scss');

if (isPackageExists('vue')) {
  if (isPackageExists('scss')) {
    extendsList.push('stylelint-config-recommended-vue/scss');
  } else {
    extendsList.push('stylelint-config-recommended-vue');
  }
}

extendsList.push('stylelint-config-rational-order');
extendsList.push('stylelint-prettier/recommended');

export default {
  cache: false,
  fix: true,
  plugins: ['stylelint-order', 'stylelint-config-rational-order/plugin'],
  extends: extendsList,
  rules: {
    'no-empty-source': null,
    'lightness-notation': null,
  },
} as Config;
