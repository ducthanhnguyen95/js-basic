// Performing a task
function greet() {
  console.log('Hello World');
}
greet();

// Performing a task
function greetYourName(yourName) {
  console.log('Hello ' + yourName);
}
greetYourName('Thanh');
greetYourName('Marry');

// Performing a task
function greetFullName(firstName, lastName) {
  console.log('Hello ' + firstName + ' ' + lastName);
}
greetFullName('Nguyen Duc', 'Thanh');

// Calculationg a value
function square(number) {
  return number * number;
}
let number = square(2);
console.log(number);
console.log(square(2));
