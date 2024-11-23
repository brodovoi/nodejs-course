import EventEmitter from 'events';

class Post extends EventEmitter {
  constructor(author, text) {
    super();
    this.author = author;
    this.text = text;
    this.likesQnt = 0;
    this.on('likePost', (ussername) =>
      console.log(`${ussername} liked my post!`)
    );
    this.on('error', (error) => console.error(error));
  }

  like(ussername) {
    if (!ussername) {
      return this.emit('error', new Error('No username in the like request!'));
    }
    this.likesQnt += 1;
    this.emit('likePost', ussername);
  }
}

const myPost = new Post('Artem', 'My first post');

// console.log(myPost.author);
// console.log(myPost.text);
// console.log(myPost.likesQnt);

myPost.like('Alice');
setTimeout(() => {
  myPost.like();
}, 1000);

setTimeout(() => {
  myPost.like('Charlie');
}, 2000);
// console.log(myPost.likesQnt);
