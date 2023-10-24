const { isPackageExists } = require('local-pkg');

const extendsList = [];

extendsList.push('stylelint-config-standard');

(isPackageExists('scss')) && (extendsList.push('stylelint-config-standard-scss'));

if (isPackageExists('vue')) {
  if (isPackageExists('scss')) {
    extendsList.push('stylelint-config-recommended-vue/scss');
  } else {
    extendsList.push('stylelint-config-recommended-vue');
  }
}

extendsList.push('stylelint-config-rational-order');

module.exports = {
  cache: true,
  fix: true,
  plugins: [
    'stylelint-order',
    'stylelint-config-rational-order/plugin',
  ],
  extends: extendsList,
};
