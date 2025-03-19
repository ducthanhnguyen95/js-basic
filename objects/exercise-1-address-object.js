// street
// city
// zipCode
// showAddress(address)

const address = {
  street: "3 Downing",
  city: "London",
  zipCode: 1000,
};

function showAddress(address) {
  for (const key in address) {
    console.log(key, address[key]);
  }
}

showAddress(address);
