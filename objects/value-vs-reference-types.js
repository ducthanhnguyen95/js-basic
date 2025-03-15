// Value types: number, string, boolean, symbol, undefined, null
// Reference types: object, function, array
// Primitives are copied by their value
// Objects are copied by their reference
let x = 10;
let y = x;
x = 20;
console.log(x);
console.log(y);

let a = { value: 10 };
let b = a;
a.value = 20;
console.log(a);
console.log(b);

let number = 10;
function increase(number) {
  number++;
}
increase(number);
console.log(number);

let obj = { value: 10 };
function increaseObj(obj) {
  obj.value++;
}
increaseObj(obj);
console.log(obj);
