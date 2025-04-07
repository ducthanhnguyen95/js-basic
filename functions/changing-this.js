// const video = {
//   title: 'a',
//   tags: ['a', 'b', 'c'],
//   showTags() {
//     const self = this;
//     this.tags.forEach(function (tag) {
//       console.log(self.title, tag);
//     });
//   },
// };
// video.showTags();
// ––––––––––––––––––––––––––––––––––––––––––––––––––––

// function playVideo(a, b) {
//   console.log(this);
// }

// playVideo.call({ name: 'Thanh' }, 1, 2);
// playVideo.apply({ name: 'Thanh' }, [1, 2]);
// playVideo.bind({ name: 'Thanh' })();

// playVideo();
// ––––––––––––––––––––––––––––––––––––––––––––––––––––

// const video = {
//   title: 'a',
//   tags: ['a', 'b', 'c'],
//   showTags() {
//     this.tags.forEach(
//       function (tag) {
//         console.log(this.title, tag);
//       }.bind(this)
//     );
//   },
// };
// video.showTags();
// ––––––––––––––––––––––––––––––––––––––––––––––––––––
// ––––––––––––––––––––––––––––––––––––––––––––––––––––
const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    });
  },
};
video.showTags();
