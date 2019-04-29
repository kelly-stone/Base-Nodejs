var counter = function(arr) {
  return "there are " + arr.length + " element in the array";
};

var adder = function(a, b) {
  return `the sum of 2 elements is  + ${a + b}`;
};

var pi = 3.14;

module.exports = { counter, adder, pi };
// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;
