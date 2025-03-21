function addressFactory(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

console.log(addressFactory('10 Downing', 'London', 'SW1A 2AA'));
console.log(new Address('10 Downing', 'London', 'SW1A 2AA'));
console.log(typeof addressFactory('10 Downing', 'London', 'SW1A 2AA'));
console.log(typeof new Address('10 Downing', 'London', 'SW1A 2AA'));
