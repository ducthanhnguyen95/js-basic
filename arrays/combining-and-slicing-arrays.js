const first = [1, 2, 3];
const second = [4, 5, 6];
const third = [{ id: 1 }];

const combined = first.concat(second);
const slice = combined.slice(2);
third[0].id = 10;
console.log(combined);
console.log(slice);
console.log(third[0]);
