// street
// city
// zipCode
// showAddress(address)

const address = {
  street: "10 Downing",
  city: "London",
  zipCode: 'SW1A 2AA',
};

function showAddress(address) {
  for (const key in address) {
    console.log(key, address[key]);
  }
}


showAddress(address);
