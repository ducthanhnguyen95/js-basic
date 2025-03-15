const circle = {
  radius: 1,
  draw: function () {
    console.log('draw');
  },
};

for (let key in circle) console.log(key, circle[key]);
// for (let key of circle) console.log(key); -- No iterator an object;
for (let key of Object.keys(circle)) console.log(key);
for (let entry of Object.entries(circle)) console.log(entry);
if ('radius' in circle) console.log('Radius in circle');
if ('color' in circle) console.log('Color in circle');
