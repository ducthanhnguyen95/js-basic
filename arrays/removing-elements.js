let numbers = [1, 2, 3, 4];

// End
const last = numbers.pop();
console.log(numbers);
console.log(last);

// Beginning
const first = numbers.shift();
console.log(numbers);
console.log(first);

// Middle
numbers = [1, 2, 3, 4];
numbers.splice(2, 1);
console.log(numbers);
