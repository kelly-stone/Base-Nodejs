// var http = require("http");

// var onRequest = function(request, response) {
//   console.log("Request received");
//   response.writeHead(200, { "Content-Type": "application/json" });
//   // response.write('Hello from out application');
//   var myObj = {
//     name: "kelly",
//     job: "programmer"
//   };
//   response.end(JSON.stringify(myObj));
// };

// var server = http.createServer(onRequest);

var http = require("http");
var fs = require("fs");

function startServer(route, handle) {
  var onRequest = function(request, response) {
    console.log("request received" + request.url);
    route(handle, request.url);
    // if (request.url === "/" || request.url === "/home") {
    //   response.writeHead(200, { "Content-Type": "text/html" });
    //   var myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8");
    //   // response.write('Hello from out application');
    //   myReadStream.pipe(response);
    // } else if (request.url === "/review") {
    //   response.writeHead(200, { "Content-Type": "text/html" });
    //   var myReadStream = fs.createReadStream(
    //     __dirname + "/review.html",
    //     "utf8"
    //   );
    //   // response.write('Hello from out application');
    //   myReadStream.pipe(response);
    // } else if (request.url === "/api/v1/records") {
    //   response.writeHead(200, { "Content-Type": "application/json" });
    //   var jsonObj = {
    //     name: "kelly"
    //   };
    //   response.end(JSON.stringify(jsonObj));
    // } else {
    //   response.writeHead(404, { "Content-Type": "text/html" });
    //   fs.createReadStream(__dirname + "/404.html", "utf8").pipe(response);
    // }
  };

  var server = http.createServer(onRequest);

  server.listen(9000);
  console.log("Server started on localhost port 5000");
}

exports.startServer = startServer;
