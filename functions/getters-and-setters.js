const person = {
  firstName: 'Thanh',
  lastName: 'Nguyen Duc',
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parst = value.split(' ');
    this.firstName = parst[0];
    this.lastName = parst[1];
  },
};

// getters => access properties
// setters => change (mutate) them
console.log(person.firstName + ' ' + person.lastName);
person.fullName = 'John Smith';
console.log(person.fullName);
console.log(person);
