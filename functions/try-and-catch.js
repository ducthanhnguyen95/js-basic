const person = {
  firstName: 'Thanh',
  lastName: 'Nguyen Duc',
  set fullName(value) {
    if (typeof value !== 'string')
      // return;
      throw new Error('Value is not a string');

    const parst = value.split(' ');
    if (parst.length !== 2) throw new Error('Enter a first and last name.');

    this.firstName = parst[0];
    this.lastName = parst[1];
  },
};

try {
  //   person.fullName = null;
  person.fullName = '';
} catch (e) {
  //   alert(e);
  console.log(e);
}
console.log(person);
