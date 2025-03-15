function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  };
}

const another = new Circle(1); // equivalent Circle.call({}, 1);
Circle.call({}, 1);
Circle.apply({}, []);

// const Circle1 = new Function(
//   'radius',
//   `
//   this.radius = radius;
//   this.draw = function () {
//     console.log('draw');
//   }
//     `
// );

// const circle = new Circle1(1);
// console.log(circle);

console.log(Circle.name);
console.log(Circle.length);
console.log(Circle.constructor);
