const numbers = [1, 2, 3, 1, 4];

console.log(numbers.indexOf("a"));
console.log(numbers.indexOf("1"));
console.log(numbers.indexOf(1));
console.log(numbers.lastIndexOf(1));
console.log(numbers.indexOf(1, 2));

// check any elemets exists in an array
console.log(numbers.indexOf(1) !== -1);
console.log(numbers.includes(1));
