const circle = {
  radius: 1,
  draw() {
    console.log('draw');
  },
};

// const another = {};
// for(let key in circle)
//     another[key] = circle[key];
// console.log(another);

// const another = Object.assign({}, circle);
// console.log(another);

const another = { ...circle };
console.log(another);
