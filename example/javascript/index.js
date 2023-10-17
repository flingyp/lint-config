function add(a, b) {
  return a + b;
}

const sub = (a, b) => a + b;

const addValue = add(1, 2);
const subValue = sub();

console.log('addValue->>', addValue);
console.log('subValue->>', subValue);
