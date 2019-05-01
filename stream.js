var fs = require("fs");

var myReadSteam = fs.createReadStream(__dirname + "/readMe.txt", "utf8");
var data = "";
myReadSteam.on("data", function(chunk) {
  data += chunk;
});
myReadSteam.on("end", function() {
  console.log(data);
});

var myWriteSteam = fs.createWriteStream(__dirname + "/writeMe.txt", "utf8");
var data = "";
myReadSteam.on("data", function(chunk) {
  myWriteSteam.write(chunk);
});
myReadSteam.on("end", function() {
  //   console.log(data);
});
