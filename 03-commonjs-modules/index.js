const { myName, myHobbies, myFavoriteNumber } = require('./multiple-exports');
const {
  myName: myOtherName,
  myGreateHobbies,
  myFriendsName,
} = require('./export-and-import');
const greetingFn = require('./single-export');
// Dont use absolute path
// const greetingFn = require('/Users/admin/Desktop/node/03-commonjs-modules/single-export.js');

// Imports from multiple-exports
console.log(myName);
console.log(myHobbies);
console.log(myFavoriteNumber);

myHobbies.push('Gaming');

// Import from sinle-export
console.log(greetingFn);
greetingFn(myName);

// Imports from './export-and-import';
console.log(myOtherName);
console.log(myFriendsName);
console.log(myGreateHobbies);
