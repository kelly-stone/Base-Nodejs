var fs = require("fs");

function route(handle, pathname, response) {
  console.log("Routing a request for " + pathname); //now can see Routing a request for /home when you put localhost 3000/home
  if (typeof handle[pathname] === "function") {
    // app1.js
    handle[pathname](response);
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/404.html", "utf8").pipe(response);
  }
}

module.exports.route = route;
