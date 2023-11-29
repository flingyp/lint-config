function addTs(a: number, b: number) {
  return a + b;
}

const subTs = (a: number, b: number) => a - b;

const addTsValue = addTs(1, 2);
const subTsValue = subTs(4, 3);
const testAnyType: any = 2;
console.log(testAnyType);

// console.log('addTsValue->>', addTsValue);
console.log('subTsValue->>', subTsValue);
