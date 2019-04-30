// var all = require("./count");

// console.log(all.counter(["ruby", "nodejs", "react"]));
// console.log(all.adder(2, 3));
// console.log(all.pi);

var fs = require("fs");
var readMe = fs.readFileSync("readMe.txt", "utf8");
fs.writeFileSync("writeMe.txt", "Hello world");
