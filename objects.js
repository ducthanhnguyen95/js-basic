let name = 'Thanh';
let age = 30;

let person = {
  name: 'Thanh',
  age: 30,
}

console.log(person);
console.log(typeof person);

// Dot Notation
person.name = 'Mosh';
console.log(person.name);

// Bracket Notation
person['name'] = 'Mary';
console.log(person.name);

let selection = 'name';
person[selection] = 'John';
console.log(person.name);
