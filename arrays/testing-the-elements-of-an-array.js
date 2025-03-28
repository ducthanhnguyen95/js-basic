let numbers = [1, 2, 3];

let allPositive = numbers.every(function (value) {
  return value >= 0;
});

console.log(allPositive);

numbers = [1, -1, 2, 3];
allPositive = numbers.every(function (value) {
  return value >= 0;
});
console.log(allPositive);

let atLeastOnePositive = numbers.some(function (value) {
  return value >= 0;
});
console.log(atLeastOnePositive);
