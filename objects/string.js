// String primitive
const message = 'This is my first message';
console.log(message.length);
console.log(message[0]);
console.log(message[1]);
console.log(message.includes('my'));
console.log(message.includes('not'));
console.log(message.startsWith('This'));
console.log(message.startsWith('this'));
console.log(message.endsWith('e'));
console.log(message.indexOf('my'));
console.log(message.replace('first', 'second'));
console.log(message);
console.log(message.toUpperCase());
console.log(message.endsWith('e'));
console.log("This is my ' first message");
console.log('This is my\nfirst message');
console.log('This is my first message'.split(' '));

// String object
const another = new String('hi');
