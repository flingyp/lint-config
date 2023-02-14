const { isPackageExists } = require('local-pkg')

const TS = isPackageExists('typescript')
const VUE = isPackageExists('vue')

const eslintExtendsList = []

eslintExtendsList.push('@flypeng/eslint-config-basic')

if (TS) eslintExtendsList.push('@flypeng/eslint-config-typescript')

if (VUE) eslintExtendsList.push('@flypeng/eslint-config-vue')

module.exports = {
  extends: eslintExtendsList,
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
}
