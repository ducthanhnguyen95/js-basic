function showPrimes(limit) {
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) console.log(i);
  }
}

function isPrime(number) {
  for (let j = 2; j <= Math.sqrt(number); j++)
    if (number % j === 0) return false;

  return true;
}

showPrimes(50);
// console.log(Math.sqrt(16));
