//Remember, new objects can be created with a constructor function, like new F().
//If F.prototype is an object, then the new operator uses it to set [[Prototype]] for the new object.Note that the F.prototype here means a regular property named "prototype" on F. It sounds the same, but it’s not the same thing as the internal prototype. The internal prototype is looked at when the object is used as a prototype. The F.prototype property is only used when F is called as a constructor, to set the [[Prototype]] of the new object. For example:
let animal = {
  sleeps: true,
};
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype = animal;
let rabbit = new Rabbit("White Rabbit");
//rabbit.__proto__ = animal
console.log(rabbit.sleeps); //true
//Setting Rabbit.prototype = animal literally states the following: "When a new Rabbit is created, assign its [[Prototype]] to animal".
//F.prototype property is only used when new F is called. It assigns [[Prototype]] of the new object. It does nothing to F itself.Think of it as a one-time gift. There is no connection between F.prototype and the new object.If, after the creation, F.prototype property changes(F.prototype = <another object>), then new objects created by the new F will have another object as [[Prototype]], but already existing objects keep the old one.'

//Default F.prototype, constructor property
//Every function has the "prototype" property even if we don't supply it. The default "prototype" is an object with the only property constructor that points back to the function itself. Like this:
function Rabbit1() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }
console.log(Rabbit1.prototype.constructor == Rabbit1); //true

//Naturally, if we do nothing, the constructor property is available to all rabbits through [[Prototype]]:
function Cat() {
  //by default:
  //cat.prototype = {constructor: Cat}
}
let cat = new Cat(); //inherits from {constructor: Rabbit}
console.log(cat.constructor == Cat); //true(from prototype)
//We can use constructor property to create a new object using the same constructor as the existing one.
function Dog(name) {
  this.name = name;
  console.log(name);
}
let dog = new Dog("German Shepard");

let dog2 = new dog.constructor("Golden Retriever");
//This  is handy when we have an object, don't know which constructor was used for it, and want to create another one of the same kind. But the most important thing about "constructor" is that ...JavaScript itself does not ensure the right "constructor" value.
//That's actually not a problem. The "constructor" property is not used in the language, it's just a conventional thing. There are many built-in objects, like Array, Date, and others that don't have it. Also, there are many cases where we replace the default "prototype" as a whole, and then usually we also set the "constructor" to a different value.
function Kitten() {}
Kitten.prototype = {
  cries: true,
};
let kitten = new Kitten();
console.log(kitten.constructor === Kitten); //false
//So to keep the right "Constructor", we can choose to add/remove properties to the default "prototype" instead of overwriting it as a whole:
function Kitten1(){}
//Not overwrite the whole Kitten.prototype totally
//Just add to it
Kitten1.prototype.cries = true;
//the default Kitten.prototype = {constructor: Kitten} is preserved.
//or alternatively. recreate the constructor property manually:
Kitten1.prototype = {
  constructor: Kitten1, //recreate the constructor property
  cries: true,
};//now the constructor is also correct becusse we added it.
