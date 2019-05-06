var fs = require("fs");

function route(handle, pathname) {
  console.log("Routing a request for " + pathname); //now can see Routing a request for /home when you put localhost 3000/home
  if (typeof handle[pathname] === "function") {
    // app1.js
    handle[pathname]();
  } else {
    console.log("no handler for " + pathname);
  }
}

module.exports.route = route;
