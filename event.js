// var events = require("events");

// var myCode = new events.EventEmitter();

// myCode.on("someWork", function(message) {
//   console.log(message);
// });

// myCode.emit("someWork", "I am reviewing node js event");

//example with util:
var events = require("events");
var util = require("util");

var Person = function(name) {
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

var coco = new Person("coco");
var kelly = new Person("kelly");
var baby = new Person("baby");

var person = [coco, kelly, baby];

person.forEach(function(person) {
  person.on("speak", function(message) {
    console.log(person.name + " says " + message);
  });
});

coco.emit("speak", " I am eating");
kelly.emit("speak", " I am sleeping");
baby.emit("speak", " I am drinking");
