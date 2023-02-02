const { isPackageExists } = require('local-pkg')

const TS = isPackageExists('typescript')
const VUE = isPackageExists('vue')

module.exports = {
  extends: [
    TS ? '@flypeng/eslint-config-typescript' : '@flypeng/eslint-config-basic',
    VUE && '@flypeng/eslint-config-vue',
  ],
}
