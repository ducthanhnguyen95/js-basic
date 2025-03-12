function sum(limit) {
  let result = 0;
  let three = 3;
  let five = 5;
  let fifteen = 15;
  while (true) {
    if (three <= limit) {
      result += three;
      three = three + 3;
    }
    if (five <= limit) {
      result += five;
      five = five + 5;
    }

    if (fifteen <= limit) {
      // Trừ đi bội số của 15 vì chúng đã được cộng hai lần
      result -= fifteen;
      fifteen += 15;
    }

    if (three > limit && five > limit && fifteen > limit) break;
  }
  return result;
}

function sum2(limit) {
  let sum = 0;
  for (let i = 0; i <= limit; i++) if (i % 3 === 0 || i % 5 === 0) sum += i;
  return sum;
}

console.log(sum(15));
console.log(sum2(15));
