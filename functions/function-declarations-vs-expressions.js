// Function Declaration
function walk() {
  console.log('walk');
}

// Name Function Expresstion
let run = function walk() {
  console.log('run');
};

// Anonymous Function Expresstion
let run2 = function () {
  console.log('run');
};

let move = run;
run();
move();
