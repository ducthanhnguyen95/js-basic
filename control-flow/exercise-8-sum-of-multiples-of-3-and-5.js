function sum(limit) {
  let result = 0;
  let three = 3;
  let five = 5;
  while (true) {
    if (three <= limit) {
      result += three;
      three = three + 3;
    }
    if (five <= limit) {
      result += five;
      five = five + 5;
    }

    if (three > limit && five > limit) break;
  }
  return result;
}

function sum2(limit) {
  let sum = 0;
  for (let i = 0; i <= limit; i++) if (i % 3 === 0 || i % 5 === 0) sum += i;
  return sum;
}

console.log(sum(10));
