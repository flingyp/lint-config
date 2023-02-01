const { isPackageExists } = require('local-pkg')

const TS = isPackageExists('typescript')

module.exports = {
  extends: [
    TS ? '@flypeng/eslint-config-typescript' : '@flypeng/eslint-config-basic',
  ],
}
