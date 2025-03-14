// Factory function
function createCircle(radius, location, isVisible, draw) {
  return {
    radius,
    location,
    isVisible,
    draw() {
      console.log('draw');
    }
  };
}

const circle1 = createCircle(1, 1, true);
console.log(circle1);
circle1.draw();
const circle2 = createCircle(10, 10, false);
console.log(circle2);
circle2.draw();
