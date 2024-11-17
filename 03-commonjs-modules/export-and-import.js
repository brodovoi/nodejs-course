const { myName, myHobbies } = require('./multiple-exports');

const myFriendsName = 'Alice';

module.exports.myName = myName;
module.exports.myGreateHobbies = myHobbies;
module.exports.myFriendsName = myFriendsName;
