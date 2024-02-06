//Map is a collection of keyed data items like a Object. But the main difference is that Map allows keys of any type.
//Methods and properties are:
// new Map(); //creates the map
// map.set(key, value); //stores the value by the key
// map.get(key); // returns the value by the key. undefined if the key doesn't exist in the map
// map.delete(key); //removes the value by the key
// map.clear(); //removes everything from the map.
// map.size; //returns the current element count

let map = new Map();
map.set("1", "str1"); //a string key
map.set(true, "bool1"); // a boolean key
map.set(1, "num1"); //a numeric key

//remember regular objects? It would convert the keys to string
//Map keeps the type, so these two are different
console.log(map.get(1)); //'num1'
console.log(map.get("1")); //'str1
console.log(map.size); //3
//Keys are not converted into strings
//Map can also use objects as keys:
let john = { name: "John" };

// Create a map to store visits count
let visitsCountMap = new Map();

// Use john as the key for the map
visitsCountMap.set(john, 123);

// Now you can retrieve the visits count using the same john object
console.log(visitsCountMap.get(john)); // 123

//iteration over Map For looping over a map, there are 3 methods: map.keys() that returns an iterable for keys, map.values() that returns an iterable for values and map.entries() that returns an iterable for entries [key, value], it is used by default in for...of.

let recipeMap = new Map([
  ["carrot", 300],
  ["brocolli", 250],
  ["cabbage", 30],
]);
//iterate over keys(vegetables)
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable);
}
//to iterate over values(amounts)
for (let amount of recipeMap.values()) {
  console.log(amount);
}
//iterate over [key, value] entries
for (let entry of recipeMap) {
  //same as recipeMaps.entries()
  console.log(entry);
}
//Note that the iteration goes in the same order as the values were inserted. It preserves order, unlike our Objects.
//Map has a built-in forEach method, similar to Arrays:
//runs the function for each(key, value) pair
recipeMap.forEach((value, key, map) => {
  console.log(`${key} : ${value}`);
});

//Object.entries: Map from Object
//When a map is created, we can pass an array(or another iterable) with key/value pairs for initialization, like this:
let map2 = new Map([
  ["1", "str1"],
  [1, "num1"],
  [true, "bool1"],
]);
console.log(map.get("1"));

//we can create a map from an object like:
let obj = {
  name: "Jacob",
  age: 22,
};
let map3 = new Map(Object.entries(obj));
console.log(map3.get("name"));

//Object.fromEntries: Object from Map :
// This operation is the reverse of Object.entries(). It constructs an object from an array of key-value pairs:
let prices = Object.fromEntries([
  ["banana", 12],
  ["orange", 2],
  ["meat", 4],
]);
console.log(prices.orange);

// Utilizing Object.fromEntries to Convert a Map to a Plain Object
// For instance, if we store data in a Map but need to pass it to third-party code that expects a plain object:
let obj2 = Object.fromEntries(map.entries()); // Convert the Map to a plain object

// When we call map.entries(), it returns an array of key/value pairs in the exact format required for Object.fromEntries.

//Set
//A Set is a special type collection -"set of values"(without keys), where each value may occur only once.
//It's main methods are:
// new Set(iterable) //creates the set, and if an iterable object is provided)(usua;;y an array), copies values from it into the set
// set.add(value) //adds a value, returns the set itself
// set.delete(value) //removes the values, returns gtrue if value existed at the moment of the call, otherwise false
// set.has(value) //returns true if the value exists in the set, otherwise false
// set.clear() //removes everything from the set
// set.size //is the elements count

//The main feature is that repeated calls of set.add(value) with the same value don't do anything. That is the reason why each value appears in a Set only once.
let set = new Set();
let jonah = { name: "jonah" };
let pete = { name: "pete" };
let mary = { name: "Mary" };

set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);
console.log(set.size);

for (let user of set) {
  console.log(user.name);
}
console.log(set.has("hello"));
//The alternative to Set could be an array of users, and the code to check for the duplicates on every insertion using arr.find. But the performance would be much qworse because this method walks through the whole array checking every element. Set is optimized internally for uniqueness checks.

//Iteration over set: We can use for..of or forEach loop for Set
for (let item of set) {
  console.log(item);
}

set.forEach((item) => console.log(item));

//Converting Sets to Arrays and Vice Versa:
//Use Array.from(set) to convert a set to an array.
//Use new Set(array) to create a set from an array.
let arrayFromSet = Array.from(set);
let setFromArray = new Set([1, 2, 3]);

/* Use Cases:
Sets are particularly useful when you need to store unique values and perform operations like union, intersection, and difference efficiently.*/
let uniqueNumbers = new Set([1, 2, 3, 1, 2]);
console.log(uniqueNumbers);

uniqueNumbers.add(4);
console.log(uniqueNumbers);
console.log(uniqueNumbers.has(2));

uniqueNumbers.delete(3);
console.log(uniqueNumbers);

console.log(uniqueNumbers.size);

for (let num of uniqueNumbers) {
  console.log(num);
}


let uniqueNumbers2 = new Set([11, 21, 13, 11, 20]);

// Using forEach to iterate over the elements of the Set
uniqueNumbers2.forEach((value, valueAgain, set) => {
  console.log(value);
  // Note: valueAgain is the same as value, and 'set' is the Set being traversed
});

// Alternatively, you can use arrow function with forEach
uniqueNumbers2.forEach(value => {
  console.log(value);
});
