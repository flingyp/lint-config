const { isPackageExists } = require('local-pkg');

// 注意：@flypeng/eslint-config-basic 公共规则配置应该放在最后（防止覆盖）
const extendsList = ['@flypeng/eslint-config-javascript', '@flypeng/eslint-config-other'];

(isPackageExists('typescript')) && (extendsList.push('@flypeng/eslint-config-typescript'));
(isPackageExists('vue') && (extendsList.push('@flypeng/eslint-config-vue')));

extendsList.push('@flypeng/eslint-config-basic');

const eslintConfig = {
  extends: extendsList,
};

module.exports = eslintConfig;
