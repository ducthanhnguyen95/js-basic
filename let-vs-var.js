function start() {
  //   for (let i = 0; i < 5; i++) console.log(i);
  for (var i = 0; i < 5; i++) console.log(i);
  console.log(i);
}

function start2() {
  //   for (let i = 0; i < 5; i++) console.log(i);
  for (var i = 0; i < 5; i++) {
    if (true) {
      //   var color = 'red';
      let color = 'red';
    }
  }
  console.log(color);
}

// var => function-scoped
// ES6 (ES2015): let, const => block-scoped

start();
start2();

// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// var color = 'red';
// let age = 30;
// function sayHi() {
//   console.log('hi');
// }
// window.color; // return red
// window.color; // return undefined
// window.sayHi; // return hi
