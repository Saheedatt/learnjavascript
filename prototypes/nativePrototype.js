//The "prototype" property is widely used by the core of javascript itself. All built-in constructor functions use it.
//Object.prototype
//Let's say we output an empty object:
let obj ={};
console.log(obj);
//Where does it come from? Who is its prototype? Can we find it in the console?
//We can find it in the console. It's the "Object.prototype" object. It's the hidden part of the language that we can't directly access, but it exists and is used in the engine.
//Other built-in objects like Array, Date, Function, and others also keep methods in prototypes. For instance, when we create an array:
let arr = [1, 2, 3];
//The array arr inherits from Array.prototype. So Array.prototype provides methods to work with arrays.
//The prototype property is used primarily for inheritance: when one object needs to inherit from another.
//Primitives
//There are 6 primitive types in javascript: string, number, boolean, symbol, null, and undefined. And there is also an object type.
//The primitive values do not have properties. But if we try to access a property of a primitive, then javascript converts it to an object, by using a built-in object wrapper. This happens so quickly that it's barely noticeable, but we can see it if we look at the returned type:
let str = "Hello";
console.log(str.toUpperCase()); //HELLO'
//Here, the string str is a primitive. So in the moment of accessing its property, a special object is created that knows the value of the string, and has useful methods, like toUpperCase().
//After the method is called, the special object is destroyed.

//Changin native prototypes
//Native prototypes can be modified. For instance, if we add a method to String.prototype, it becomes available to all strings. This can be useful, but also dangerous. If many libraries add methods to native prototypes, they may conflict, or one of them may override another.
//For instance, if two libraries add different toString methods to String.prototype, then one of them would be lost. That's a recipe for a bug.
String.prototype.show = function(){
    console.log(this);
}
"BOOM!".show(); //BOOM!
//We added a method to String.prototype. And it became available to all strings.
//It's important to understand that modifying native prototypes is generally a bad idea. If we need to add a method, or modify a method, it's better to use a new object with the desired prototype.

//In modern programming, there is only one case where modifyinh native prototypes is approved and that is on polyfilling.
//Polyfilling is a term for making a substitute for a method that exists in the JavaScript specificstion, but is not yet supported by a particu;ar JavaScript engine. For instance:
if (!String.prototype.repeat){ //if there is no such method
    //add it to the prototype
    String.prototype.repeat = function(n){
        //repeat the string n times
        return new Array(n + 1).join(this);
    };
}
console.log("La".repeat(3)); //LaLaLa

//Borrowing from prototypes
//In the previous chapter, we saw that we can call a method on an object if it exists in the prototype of the object. Can we call a method that exists in a prototype of the prototype?
//The answer is yes. If we have a method in the prototype, we can use it on any object.
let obj0 = {
    0: "Hello",
    1: "World",
    length: 2,
};
obj0.join = Array.prototype.join;
console.log(obj0.join(', ')); //Hello, World
//It works becuase the internal algorithm of the built-in join method only cares about the correct indexes ad the length property. It doesn't check uf the object is indeed an array. Many built-in methods are like that.
//Borrowing ,ethods is flexible. It allows us to mix functionalitites from different objects if needed.
