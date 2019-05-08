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
var url = require("url");
var querystring = require("querystring");

function startServer(route, handle) {
  var onRequest = function(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request received " + pathname);
    var data = [];
    request
      .on("error", function(err) {
        console.error(err);
      })
      .on("data", function(chunk) {
        data.push(chunk);
      })
      .on("end", function() {
        if (request.method === "POST") {
          if (data.length > 1e6) {
            request.connection.destroy();
          }
          data = Buffer.concat(data).toString();
          route(handle, pathname, response, querystring.parse(data));
        } else {
          var params = url.parse(request.url, true).query;
          route(handle, pathname, response, params);
        }
      });
  };

  var server = http.createServer(onRequest);

  server.listen(3003);
  console.log("Server started on localhost port 3000");
}

module.exports.startServer = startServer;

//var params = url.parse(request.url, true).query;

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
