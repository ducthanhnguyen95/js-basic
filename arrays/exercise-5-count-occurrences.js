const numbers = [1, 2, 3, 4, 1];

function countOccurrences(array, searchElement) {
  //   let count = 0;
  //   for (let element of array) {
  //     if (element === searchElement) count ++;
  //   }
  //   return count;

  return array.reduce((accumulator, current) => {
    if (current === searchElement) accumulator++;
    return accumulator;
  }, 0);
}

const result = countOccurrences(numbers, 1);
console.log(result);
