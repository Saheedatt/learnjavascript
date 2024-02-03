//Objects can be described as a collection of related property where each property is represented by a key-value pair.  This means that what is normally a variable name becomes a property key and what is normally a variable's value becomes a property value.  The property key is always a string, but the property value can be any data type.  The property value can even be another object.  Objects are mutable, meaning they can be changed after they are created.  Objects are created using curly braces {} and the key-value pairs are separated by commas.  The key-value pairs are also separated by colons.
//An empty object can be created using any of the two following methods:
let emptyObject = {}; //object literal syntax
let emptyObject2 = new Object(); //object constructor syntax
//e.g
let myObject = {
    name: "John",
    age: 30,
};
console.log(myObject); //prints out {name: "John", age: 30}

//Propertyu values are accessible using the dot notation:
console.log(myObject.name); //prints out John

//To remove a property from an object, use the delete keyword:
delete myObject.age;
console.log(myObject); //prints out {name: "John"}

//You can use multiword property names, but they must be quoted and can only be accessed using bracket notation i.e dot notation won't work i.e:
let myObject2 = {
    "first name": "Jake",
    "last name": "Lively",
};

console.log(myObject2["first name"]); //prints out Jake
delete myObject2["first name"];
console.log(myObject2); //prints out {last name: "Lively"}

//Note that square brackets are much more powerful than the dot notation.  This is because the square brackets can take any expression, while the dot notation can only take a valid identifier.  This means that the square brackets can take a variable name, a string literal, or any expression that resolves to a string.  The dot notation can only take a valid identifier.  e.g:
let myObject3 = {
    name: "John",
    age: 30,
};
let myVariable = "name";
console.log(myObject3[myVariable]); //prints out John
console.log(myObject3["na" + "me"]); //prints out John
console.log(myObject3["na" + "me" + ""]); //prints out John
//console.log(myObject3[myVariable + 1]); //prints out undefined
//console.log(myObject3[myVariable - 1]); //prints out undefined
//console.log(myObject3[myVariable * 1]); //prints out undefined
//console.log(myObject3[myVariable / 1]); //prints out undefined
//console.log(myObject3[myVariable % 1]); //prints out undefined
//console.log(myObject3[myVariable ** 1]); //prints out undefined


//Property value shorthand
//In real code, we often use existing variables as values for property names.  In such cases, we can use the property value shorthand.  This means that we don't have to repeat the variable name as the property name.  e.g:
let name = "John";
let age = 30;
let myObject4 = {
    name: name,
    age: age,
};
console.log(myObject4); //prints out {name: "John", age: 30}

//The above code can be simplified using the property value shorthand as follows:
let name2 = "John";
let age2 = 30;
let myObject5 = {
    name2,
    age2,
};
//We can also use both in the same object:
let name3 = "John";
let age3 = 30;
let myObject6 = {
    name3,
    age3: age3, //age: 30;
};
console.log(myObject6); //prints out {name3: "John", age3: 30}

//There is a special operator "in" to check for the existence of a property
let myObject7 = {
    name: "John",
    age: 30,
};
console.log("name" in myObject7); //prints out true
console.log("job" in myObject7); //prints out false

//The "for...in" loop
//To walk over all keys of an object, there exists a special form of the loop: for...in.  This is a completely different thing from the for(;;) loop that we have been using.  The syntax is:
for (key in object) {
    //excutes the body for each key among object properties 
}

//e.g
let myObject8 = {
    name: "John",
    age: 30,
    isAdmin: true
};
for(let key in myObject8){
    console.log(key); //prints out name, age, isAdmin
    console.log(myObject8[key]); //prints out John, 30, true
}

//Note that all "for" constructs allows us to declare the looping variable inside the loop, like let key here.  This is called a "leaked variable".  A variable declared inside a loop is only visible inside that loop.  But in the case of for...in, the variable is visible outside of it.  So we can use it after the loop is finished.  e.g:
let myObject9 = {
    name: "John",
    age: 30,
    isAdmin: true
};
let key;
for(key in myObject9){
    console.log(key); //prints out name, age, isAdmin
    console.log(myObject9[key]); //prints out John, 30, true
}
console.log(key); //prints out isAdmin  

//prop could be used instead of key.  It is just a variable name.  But it is better to use key because it is more descriptive.

//The equality == and strict equality === operators for objects work exactly the same...for objects.  Two objects are equal only if they are the same object.  For instance, two variables reference the same object, they are equal:
let myObject10 = {};
let myObject11 = myObject10;
console.log(myObject10 == myObject11); //prints out true
console.log(myObject10 === myObject11); //prints out true
//but two undependent objects are not equal, even if they look alike:
let myObject12 = {};
let myObject13 = {}; //two independent objects
console.log(myObject12 == myObject13); //prints out false

//An object declared as const can be changed
const myObject14 = {
    name: "John",
};
myObject14.name = "Jake";
console.log(myObject14); //prints out {name: "Jake"}

//but it cannot be reassigned
//const myObject15 = {
//    name: "John",
//};
//myObject15 = {}; //error

//An alternative approach to building objects is to first save an empty object literal to a variable, then use the dot notation to declare new properties on the fly and use the assignment operator to add values to those properties.  e.g:
let myObject16 = {};
myObject16.rooms = 20;
myObject16.color = blue;
console.log(myObject16); //prints out {rooms: 20, color: blue}

//use arrays for ordered data and objects for unstructured data