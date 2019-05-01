var fs = require("fs");

//read:
var myReadSteam = fs.createReadStream(__dirname + "/readMe.txt", "utf8");
var data = "";
myReadSteam.on("data", function(chunk) {
  data += chunk;
});
myReadSteam.on("end", function() {
  console.log(data);
});

//write:
var myWriteSteam = fs.createWriteStream(__dirname + "/writeMe.txt", "utf8");
var data = "";
myReadSteam.on("data", function(chunk) {
  myWriteSteam.write(chunk);
});
myReadSteam.on("end", function() {
  //   console.log(data);
});

//change data in writeMe.txt:
// var myWriteSteam = fs.createWriteStream(__dirname + "/writeMe.txt", "utf8");
// var writeData = "Helllllllllllooooooo";
// myWriteSteam.write(writeData);
// myWriteSteam.end();

//there is a simple way to copy data by using pipe():
// var fs = require("fs");
// var myReadSteam = fs.createReadStream(__dirname + "/readMe.txt", "utf8");
// var myWriteSteam = fs.createWriteStream(__dirname + "/writeMe.txt", "utf8");
// myReadSteam.pipe(myWriteSteam);
