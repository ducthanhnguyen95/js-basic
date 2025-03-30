const numbers = [1, 2, 3, 4];

function getMax(array) {
  //   let max = 0;
  //   for (let element of array) if (element > max) max = element;
  //   if (max !== 0) return max;
  //   return undefined;

  if (array.length === 0) return undefined;
  return array.reduce((a, b) => a > b ? a : b);
}

console.log(getMax([1, 2, 2, 1, 3]));
