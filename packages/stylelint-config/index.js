const { isPackageExists } = require('local-pkg');

const extendsList = ['stylelint-config-standard'];

isPackageExists('scss') && extendsList.push('stylelint-config-standard-scss');

if (isPackageExists('vue')) {
  if (isPackageExists('scss')) {
    extendsList.push('stylelint-config-recommended-vue/scss');
  } else {
    extendsList.push('stylelint-config-recommended-vue');
  }
}

extendsList.push('stylelint-config-rational-order');
extendsList.push('stylelint-prettier/recommended');

const cwd = process.cwd();
const ignoreFilesPath = `${cwd}/**/*.!{css,scss,vue}`;

module.exports = {
  cache: true,
  fix: true,
  ignoreFiles: [ignoreFilesPath],
  plugins: ['stylelint-order', 'stylelint-config-rational-order/plugin'],
  extends: extendsList,
};
