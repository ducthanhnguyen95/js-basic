// -- Falsy
// undefined
// null
// ''
// false
// 0
// NaN

function countTruethy(array) {
  let count = 0;
  for (let value of array) if (value) count++;
  console.log(count);
}

let array = [1, 2, 3];
countTruethy(array);
