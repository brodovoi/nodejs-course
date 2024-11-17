function greeting(name) {
  console.log(`Hello ${name}`);
}

// Dont do this
// module.exports remains {}
// exports = greeting;

module.exports = greeting;
