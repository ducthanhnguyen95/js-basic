// console.log(false || true);
// console.log(false || 'Thanh');
// console.log(false || 1);
// console.log(false || 1 || 2);

// Falsy (false)
// undefine
// null
// 0
// false
// ''
// NaN
// Anything is not Falsy -> Truthy

// Short-circuiting
// console.log(false || 1 || 2);

let userColor = 'red';
let defaultColor = 'blue';
let currendColor = userColor || defaultColor;
console.log(currendColor);
userColor = undefined;
currendColor = userColor || defaultColor;
console.log(currendColor);
