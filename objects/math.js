// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));
// Expected output: 0, 1 or 2

console.log(getRandomInt(1));
// Expected output: 0

console.log(Math.random());
// Expected output: a number from 0 to <1

console.log(Math.round(1.9));
console.log(Math.max(1, 2, 3, 4, 5));
console.log(Math.min(1, 2, 3, 4, 5));

// Getting a random number between two values
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
