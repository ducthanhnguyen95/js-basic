function arrayFromRange(min, max) {
  const result = [];
  for (let i = min; i <= max; i++) result.push(i);
  return result;
}

let numbers = arrayFromRange(1, 4);
console.log(numbers);
numbers = arrayFromRange(-10, -4);
console.log(numbers);
