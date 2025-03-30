// function move(array, index, offset) {
//   let result = [...array];
//   let tempIndex;
//   let temp;
//   //   if ((offset < 0 && (index + offset) < index) || offset >= array.length)
//   //     return console.log('Invalid offset.');
//   //   if (index < 0 || index >= array.length) return console.log('Invalid index.');

//   tempIndex = index + offset;
//   temp = result[index];
//   result[index] = result[tempIndex];
//   result[tempIndex] = temp;
//   return console.log(result);
// }

const numbers = [1, 2, 3, 4];
function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.log('Invalid error');
    return;
  }
  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(position, 0, element);
  return output;
}

const output = move(numbers, 2, -2);
console.log(output);
console.log(numbers);
