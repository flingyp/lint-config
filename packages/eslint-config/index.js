// 注意：@flypeng/eslint-config-basic 公共规则配置应该放在最后（防止覆盖）

const extendsList = ['@flypeng/eslint-config-javascript', '@flypeng/eslint-config-other'];

extendsList.push('@flypeng/eslint-config-basic');

const eslintConfig = {
  extends: extendsList,
};

module.exports = eslintConfig;
