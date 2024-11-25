const path = require('path');

const filePath = '/Users/admin/Desktop/node/index.js';
const textFilePath = '/Users/admin/Desktop/file.txt';
const relativePath = './node/movie.mov';
const directoryPath = './node/subfolder';

// console.log(path.isAbsolute(filePath)); //true
// console.log(path.isAbsolute(textFilePath)); //true
// console.log(path.isAbsolute(relativePath)); //false

console.log(path.basename(filePath)); //index.js
console.log(path.basename(directoryPath)); //subfolder

console.log(path.dirname(filePath)); // /Users/admin/Desktop/node
console.log(path.dirname(directoryPath)); // ./node

console.log(path.resolve(relativePath)); // /Users/admin/Desktop/node/node/movie.mov

console.log(path.extname(textFilePath)); // .txt
console.log(path.extname(relativePath)); // .mov
console.log(path.extname(directoryPath)); // ''

console.log(path.parse(filePath)); //{root: '/',dir: '/Users/admin/Desktop/node',base: 'index.js',ext: '.js', name: 'index'}

const parsedPath = path.parse(filePath);
console.log(filePath); // /Users/admin/Desktop/node/index.js
console.log(path.join(parsedPath.dir, `renamed-${parsedPath.name}.mjs`)); // /Users/admin/Desktop/node/renamed-index.mjs
