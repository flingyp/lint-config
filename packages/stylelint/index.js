/**
 * stylelint-config-standard：基础规则库
 * stylelint-order：CSS属性顺序检查插件
 * 参考文章：
 *  1. https://juejin.cn/post/7211521650252218425#heading-8
 *  2. https://juejin.cn/post/7083689889539031053
 */

const { isPackageExists } = require('local-pkg')

const VUE = isPackageExists('vue')
const SCSS = isPackageExists('sass') || isPackageExists('scss')

const styleExtendsList = ['stylelint-config-standard']
VUE && styleExtendsList.push('stylelint-config-recommended-vue')

const stylePluginList = ['stylelint-order']
SCSS && stylePluginList.push('stylelint-scss')

const ignoreFiles = [
  '**/*.js',
  '**/*.jsx',
  '**/*.tsx',
  '**/*.ts',
  '**/*.json',
  '**/*.md',
  '**/*.yaml',
  'dist',
]

module.exports = {
  root: true,
  extends: styleExtendsList,
  plugins: stylePluginList,
  fix: true,
  ignoreFiles,
  rules: {
    'order/order': [
      'custom-properties',
      'declarations',
    ],
    'order/properties-order': [
      'width',
      'height',
    ],
    'at-rule-no-unknown': null,
    'custom-property-pattern': null,
    'selector-class-pattern': null,
  },
}
