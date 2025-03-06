// If a customer has more than 100 points, they are a 'gold' customer, otherwise, they are a 'silver' customer.

let points = 110;
let type = points > 100 ? 'gold' : 'sliver';
console.log(type);
points = 90;
type = points > 100 ? 'gold' : 'sliver';
console.log(type);
