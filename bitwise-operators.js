// 1 = 00000001
// 2 = 00000010
// 3 = 00000011
// R = 00000000

// console.log(1 | 2); // Bitwise OR
// console.log(1 & 2); // Bitwise AND

// Read, Write, Execute
// 00000100
// 00000010
// 00000001

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = readPermission | writePermission;
console.log(myPermission);
let message = myPermission & readPermission ? 'Yes' : 'No';
console.log(message);
myPermission = readPermission | executePermission;
message = myPermission & writePermission ? 'Yes' : 'No';
console.log(myPermission);
console.log(message);
