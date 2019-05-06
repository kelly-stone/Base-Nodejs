var server = require("./server");
var router = require("./router");
var handler = require("./handler");

var handle = {}; //jiashe handle is a function
handle["/home"] = handler.home; //['./home] is a key, handler.home is value, will be use on router.js
handle["/"] = handler.home;
handle["/review"] = handler.review;
handle["/api/v1/records"] = handler.api_records;

server.startServer(router.route, handle);
