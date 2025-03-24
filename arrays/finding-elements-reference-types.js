const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

console.log(courses.includes({ id: 1, name: "a" }));

let course = courses.find(function (element) {
  return element.name === "a";
});

console.log(course);

course = courses.find(function (element) {
  return element.name === "xyz";
});

console.log(course);

course = courses.findIndex(function (element) {
  return element.name === "a";
});

console.log(course);

course = courses.findIndex(function (element) {
  return element.name === "xyz";
});

console.log(course);
