// function sum(a, b) {
//   return a + b; // 1 + undefined = NaN
// }

// console.log(sum(1));
// console.log(sum(1, 2, 3, 4, 5)); // return 3;

function sum() {
  let total = 0;
  for (let value of arguments) total += value;
  return total;
}

console.log(sum(1, 2, 3, 4, 5));
