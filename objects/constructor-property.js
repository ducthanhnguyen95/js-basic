// Factory function
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log('draw');
    },
  };
}
const circle = createCircle(1);

// Constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  };
}
const another = new Circle(1);

console.log(circle.constructor);
console.log(another.constructor);

new String(); // '' , "", ``
new Boolean(); // true, false
new Number(); // 1, 2, 3...
