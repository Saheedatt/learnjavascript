//INTRODUCTION TO ARRAYS

//Arrays are used to store ordered collections. They are objects with their own built-in properties and methods. There are 2 syntaxes for creating an empty array:
let arr = new Array();
let arr1 = [];
//Almost all the time, the second syntax is used. For example:
let girls = ["Chioma", "Chidinma", "Vera", "Eniola", "Mariam"];
//Arrays are numbered from zero, not one. So the first element is indexed 0: chioma
console.log(girls[0]);

//We can replace an element:
girls[2] = "Saheedat";
console.log(girls);

//We can add an element to the end of the array:
girls[5]= "Blessing";
console.log(girls);

//The total count of elements in the array is its length:
console.log(girls.length);

//An array can store elements of any type. For example:
//mix of values:
let arr2 = [ 'Apple', {name: 'Jonathan'}, true, function() { console.log('hello'); } ];
//get the object at index 1 and then show its name
console.log(arr2[1].name);

//In the arrayMethods file, we will talk about the differet array methods that we have in javascript.