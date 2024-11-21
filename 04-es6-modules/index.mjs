import { season, temperature } from './named-exports.mjs';
import { isRaining, humidity } from './inline-exports.mjs';
import getDataFromServer from './default-export.mjs';
import DEFAULT_SERVER, { USERNAME, PASSWORD } from './mixed-exports.mjs';

console.log(season);
console.log(temperature);
console.log(isRaining);
console.log(humidity);

getDataFromServer('https://jsonplaceholder.typicode.com/posts/1')
  .then((post) => console.log(post))
  .catch((error) => console.log(error));

console.log(DEFAULT_SERVER);
console.log(USERNAME);
console.log(PASSWORD);
