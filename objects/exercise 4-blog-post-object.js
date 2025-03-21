// title
// body
// author
// view
// comments
//      (author, body)
// isLive

let post = {
  title: 'title',
  body: 'body',
  author: 'author',
  view: 10,
  comments: [
    { author: 'author', body: 'body' },
    { author: 'author', body: 'body' },
  ],
  isLive: true,
};

console.log(post);
console.log(post.comments);
console.log(post.comments[0]);
console.log(post.comments[1]);
