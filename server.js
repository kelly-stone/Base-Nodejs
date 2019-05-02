var http = require("http");

var onRequest = function(request, response) {
  console.log("Request received");
  response.writeHead(200, { "Content-Type": "text/plain" });
  // response.write('Hello from out application');
  response.end("Hello from our applications");
};

var server = http.createServer(onRequest);

server.listen(3000);
console.log("Server started on localhost port 3000");
