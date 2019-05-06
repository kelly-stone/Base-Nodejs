var fs = require("fs");

function home(response) {
  console.log("executing home handler");
  response.writeHead(200, { "Content-Type": "text/html" });
  var myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8");
  // response.write('Hello from out application');
  myReadStream.pipe(response);
}
function review(response) {
  console.log("executing review handler");
  response.writeHead(200, { "Content-Type": "text/html" });
  var myReadStream = fs.createReadStream(__dirname + "/review.html", "utf8");
  // response.write('Hello from out application');
  myReadStream.pipe(response);
}
function api_records(response) {
  console.log("executing api_records handler");
  response.writeHead(200, { "Content-Type": "application/json" });
  var jsonObj = {
    name: "kelly"
  };
  response.end(JSON.stringify(jsonObj));
}

module.exports = {
  home: home,
  review: review,
  api_records: api_records
};
