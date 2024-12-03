// Imports entire module including default export
// import * as dotenv from 'dotenv';
// console.log(dotenv);

// ______________ Another way ______________
// import dotenv from 'dotenv';
// dotenv.config();
// ______________

import { config } from 'dotenv';
config();

console.log(process.env.DB_USERNAME);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_URL);
