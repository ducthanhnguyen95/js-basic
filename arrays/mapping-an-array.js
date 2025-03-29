const numbers = [1, -1, 2, 3];

const filtered = numbers.filter((value) => value >= 0);

// const items = filtered.map((n) => '<li>' + n + '</li>');
// console.log(items);
// const html = '<ul>' + items.join('') + '</ul>';
// console.log(html);

// const items = filtered.map(n => ({ value: n }));
// console.log(items);

const items = numbers
    .filter((value) => value >= 0)
    .map((n) => ({ value: n }))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);

console.log(items);
console.log(items[0]);
console.log(items[1]);
console.log(items[2]);

console.log(filtered);
