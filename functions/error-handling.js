function countOccurrences(array, searchElement) {
  //   let count = 0;
  //   for (let element of array) {
  //     if (element === searchElement) count ++;
  //   }
  //   return count;
  if (!Array.isArray(array)) throw new Error('Invalid array.');

  return array.reduce((accumulator, current) => {
    if (current === searchElement) accumulator++;
    return accumulator;
  }, 0);
}

try {
  const numbers = [1, 2, 3, 4, 1];
  const result = countOccurrences(null, 1);
  console.log(result);
} catch (e) {
  console.log(e.message);
}
