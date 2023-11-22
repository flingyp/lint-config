import eslintConfig from '@flypeng/eslint-config';

function _addTs(a: number, b: number) {
  return a + b;
}

const _2_subTs = (a: number, b: number) => a - b;

const addTsValue = _addTs(1, 2);
const subTsValue = _2_subTs(4, 3);

console.log('addTsValue->>', addTsValue);
console.log('subTsValue->>', subTsValue);
