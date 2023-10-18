function addTs(a: number, b: number) {
  return a + b;
}

const subTs = (a: number, b: number) => a - b;

const addTsValue = addTs(1, 2);
const subTsValue = subTs(4, 3);

console.log('addTsValue->>', addTsValue);
console.log('subTsValue->>', subTsValue);
