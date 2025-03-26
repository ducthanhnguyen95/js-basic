const first = [1, 2, 3];
const second = [4, 5, 6];

// const combined = first.concat(second);
const combined = [...first, ...second];
const combined2 = [...first, 'a', ...second, 'b'];
// const slice = combined.slice();

const copy = [...combined];
console.log(combined);
console.log(combined2);
console.log(copy);
