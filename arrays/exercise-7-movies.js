const movie = [
  { title: 'a', year: 2018, rating: 4.5 },
  { title: 'b', year: 2018, rating: 4.7 },
  { title: 'c', year: 2018, rating: 3 },
  { title: 'd', year: 2017, rating: 4.5 },
];

// All the movie in 2018 with rating 4
// Sort them by their rating descending order
// Pick their title

const result = movie
  .filter((value) => value.year === 2018 && value.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((value) => value.title);

console.log(result);
