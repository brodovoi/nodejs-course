let inRunning = true;

setTimeout(() => {
  inRunning = false;
}, 10);

process.nextTick(() => console.log('Next tick'));

while (inRunning) {
  console.log('While loop is running...');
}
