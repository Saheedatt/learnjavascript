//Protoype methods, objects without __proto__
//The __proto__ is considered outdated and somewhat deprecared(in browser-only part of the JavaScript standard).The modern methods are:
//Object.create(proto, [descriptors]) - creates an empty object with a given proto as [[Prototype]] and optional property descriptors.
//Object.getPrototypeOf(obj) - returns the [[Prototype]] of obj.
//Object.setPrototypeOf(obj, proto) - sets the [[Prototype]] of obj to proto
//These should be used instead of __proto__.
//For instance,
let animal = {
  eats: true,
};
//create a new object with animal as a prototype
let rabbit = Object.create(animal);
console.log(rabbit.eats); //true
console.log(Object.getPrototypeOf(rabbit) === animal); //true
Object.setPrototypeOf(rabbit, {}); //change the prototype of rabbit to {}
console.log(Object.getPrototypeOf(rabbit) === animal); //false

//Object.create has an optional second argument: property descriptors. We can provide additional properties to the new object there, like this:
let animal1 = {
  eats: true,
};
let chicken = Object.create(animal, {
  clucks: {
    value: true,
  },
});
console.log(chicken.clucks) //true

//The descriptors are in the same format as in Object.defineProperties. The full syntax of Object.create is:
//Object.create(proto, descriptors) //we will see about descriptors soon.
//We can use Object.create to perform an object cloning more powerful than copying properties in for...in:
//fully identical shallow clone of obj
let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
//This call makes a truly exact copy of obj, including all properties: enumerable and non-enumerable, data properties and setters/getters - everything and with the right [[Prototype]]

//Changing a prototype "on-the-fly" with Object.setPrototypeOf or obj.__proto__ is a very slow operation as it breaks internal optimizations for object property access operations.If speed is important in your project then don't do it.
