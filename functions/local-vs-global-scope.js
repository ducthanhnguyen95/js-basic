// {
//   const message = 'hi';
// }
// console.log(hi);
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// function start() {
//   if (true) {
//     const another = 'bye';
//   }
//   console.log(another);
// }
// start();
// // ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// function start() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }
// start();
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// const color = 'red';
// function start() {
//   const message = 'hi';
//   console.log(color);
// }
// function stop() {
//   const message = 'bye';
//   console.log(color);
// }
// start();
// stop();
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

const color = 'red';
function start() {
  const message = 'hi';
  const color = 'blue';
  console.log(color);
}
function stop() {
  const message = 'bye';
  console.log(color);
}
start();
stop();
