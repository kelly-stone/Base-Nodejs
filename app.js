// var all = require("./count");

// console.log(all.counter(["ruby", "nodejs", "react"]));
// console.log(all.adder(2, 3));
// console.log(all.pi);

var fs = require("fs");
// var readMe = fs.readFileSync("readMe.txt", "utf8");
// //console.log(readMe);
// fs.writeFileSync("writeMe.txt", "Hello world");

// fs.unlink("writeMe.txt", function() {
//   console.log("remove writeMe");
// });

fs.mkdir("stuff", function() {
  fs.readFile("readMe.txt", "utf8", function(err, data) {
    fs.writeFile("./stuff/writeMe.txt", data, function() {
      console.log("create stuff with readMe data");
    });
  });
});
