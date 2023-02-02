const { isPackageExists } = require('local-pkg')

const TS = isPackageExists('typescript')
const VUE = isPackageExists('vue')

const eslintExtendsList = []

if (TS) eslintExtendsList.push('@flypeng/eslint-config-typescript')
else { eslintExtendsList.push('@flypeng/eslint-config-basic') }

if (VUE) eslintExtendsList.push('@flypeng/eslint-config-vue')

module.exports = {
  extends: eslintExtendsList,
}
