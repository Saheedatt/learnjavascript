//Imn programming, we often want to take something and extend it. For instance, we have an 'animal' object with its properties and methods, and we want to make 'lion' and 'kangaroo' as slightly modified variants of it. We'd like to reuse what we have in 'animal', not copy/reimplement its methods,just build a new object on top of it.
//Prototypal Inheritance is a feature in JavaScript that helps in that.

//[[Protoype]]:
//In JavaScript, objects have a special hidden property [[Prototype]] , that is either null or references another object. That object is called 'a prototype'. The property [[Prototype]] is internal ad hidden, but there are many ways to set it. One of them is to use __proto__. li;e this:
let animal = {
  eats: true,
};
let kangaroo = {
  limps: true,
};
kangaroo.__proto__ = animal;
//__proto__ is an historical getter/setter for [[Prototype]].In modern language, it is replaced by functions like Object.getPrototypeOf/Object.setPrototypeOf that also get/set prototype.
//Back to our example above...If we look for a property in rabbit, and it is missing, JavaScript automatically take it from animal.
console.log(kangaroo.eats);
console.log(kangaroo.limps);
//We can now say that 'animal' is a prototype of 'kangaroo' or that 'kangaroo' prototypically inherits from 'animal'.
//Also, if we have a method in animal, it can also be inherited by kangaroo
let animal1 = {
  eats: true,
  births() {
    console.log("Births offspring alive");
  },
};
let kangaroo1 = {
  limps: true,
  __proto__: animal1,
};
kangaroo1.births();

//The prototype chain can be longer. We'll continue from animal1
let longEar = {
  earLength: 8,
  __proto__: kangaroo1,
};
longEar.births(); //birth is taken from the prototype chain
console.log(longEar.limps); //this is taken from kangaroo1

//There are two limitations to this:
//1. The references can't go in circles. JS will throw an error if we try to assign __proto__ in a circle
//2. The value of __proto__ can either be an object or null. Other types are ignored.
//There can only be one [[Prototype]]. An object cannot inherit from two others

//Writing doesn't use prototype. The prototype is only used for reading properties. Write/delete operations work directly with the object. In the example below, we assign its own birth method to kangaroo:
let animal3 = {
  eats: true,
  births() {
    //this method won't be used by rabbit
  },
};
let kangaroo2 = {
  __proto__: animal,
};
kangaroo.births = function () {
  console.log("Births offspring and keeps them in her sac");
};
kangaroo.births();
//From now on, kangaroo.births() call finds the method immediately in the object and executes it, without using the prototype.

//Accessor properties are an exception, as assignment is handled by a setter function. So writing to such property is the same as calling a function. For thus reason, admin,fullName works correctly below:
let user = {
  name: "Isaac",
  surname: "Yamaha",
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
  get fullName() {
    return `${this.name} ${this.surname}`;
  },
};
let admin = {
  __proto__: user,
  isAdmin: true,
};
console.log(admin.fullName);
//setter triggers!
admin.fullName = "Alice Wonderland";
console.log(admin.fullName); //This property has a setter in the prototype chain, so the assignment admin.fullName= triggers it.

//The value of "this"
//When an object method is called, "this" is always the object before the dot.So the setter call to admin.fullName = uses admin as "this", not user.This is important because we might have a big object with many methods, and have objects that inherit from it. When the inheriting objects run the inherited methods, the =y will modify only their own states, not the state of the big object.
//METHODS ARE SHARED BUT THE OBJECT STATE ISN'T SHARED

//for...in loop
//The for...in loop iterates over inherited properties too. For example:
let animal4 = {
  eats: true,
};
let rabbit = {
  jumps: true,
  __proto__: animal4,
};
//Object.keys only returns own keys
console.log(Object.keys(rabbit)); //jumps

//for...in loops over both own and inherited keys
for (let prop in rabbit) console.log(prop); //jumps, eats

//We can use hasOwnProperty to filter out inherited properties. It returns true if obj has its own(not inherited) property named prop/key.
for (let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);
  if (isOwn) {
    console.log(`Our rabbit: ${prop}`); //own property
  } else {
    console.log(`Inherited: ${prop}`);
  }
}
//Here, we have the following inheritance chain: rabbit inherits from animal, that inherits from Object.prototype. The for...in loop iterates over all properties, so the output is:
//jumps