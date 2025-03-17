const message = 'This is my\n' + "'first' message";
console.log(message);
// Object {}
// Boolean true, false
// String '', ""
// Template ``

const another = `This is my 
'first' message`;

console.log(another);

const another2 = `Hi Thanh
Thank you for joining my mailing list.
Regard,
Thanh`;

console.log(another2);

const nameThanhnd = 'Thanh';
const messageThanhnd = 'Hi' + nameThanhnd + ',\n';
console.log(messageThanhnd);

const another3 = `Hi ${nameThanhnd} ${2 + 3}
Thank you for joining my mailing list.
Regard,
${nameThanhnd}`;

console.log(another3);

// Template Literals can call 1 function return a value or void
