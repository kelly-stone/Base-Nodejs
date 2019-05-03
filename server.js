var http = require("http");

var onRequest = function(request, response) {
  console.log("Request received");
  response.writeHead(200, { "Content-Type": "application/json" });
  // response.write('Hello from out application');
  var myObj = {
    name: "kelly",
    job: "programmer",
    age: 27
  };
  response.end(JSON.stringify(myObj));
};

var server = http.createServer(onRequest);

server.listen(8000);
console.log("Server started on localhost port 8000");
