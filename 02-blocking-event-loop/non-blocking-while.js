const fs = require('fs');
let inRunning = true;

setTimeout(() => {
  inRunning = false;
}, 100);

process.nextTick(() => console.log('Next tick'));

function setImmediatePromise() {
  return new Promise((resolve, reject) => {
    setImmediate(() => resolve());
    // resolve();
  });
}

async function whileLoop() {
  while (inRunning) {
    console.log('While loop is running...');
    await setImmediatePromise();
  }
}

whileLoop().then(() => console.log('while loop end'));
