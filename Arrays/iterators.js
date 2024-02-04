//forEach 
//This method allows to run a function for every element of the array.The syntax is:
//arr.forEach(function(item, index, array){
    //do something with each item
//})
//For instance, this shows each element of the array:
["Bilbo", "Gandolf", "Nazgul" ].forEach((item, index, array) =>{
    console.log(`${item} is at index ${index} in ${array}`)
})
//The result of the function(if it returns any) is thrown away and ignored
//The forEach() method will call this function once fore each element in the array(hence the name).
//Each time, it will call the function with different arguments. The element parameter will get the value of the array element, the index parameter will get the index of the element(starting with zero) and the array parameter will get a reference to the whole array which is handy if you want to modify the element.
//Using forEach() will not be useful if you want to permanently modify the original array.
//forEach() always returns undefined. However, creating a new array from an existing array is simple with the powerful map() method. With map(), you can take an array, perform some operation on each element of the array and return a new array.

const colors = ['red', 'green', 'blue'];

// Using forEach to capitalize and log each color
colors.forEach(function (color, index) {
  const capitalizedColor = color.toUpperCase();
  console.log(`Color at index ${index}: ${capitalizedColor}`);
});

// Using arrow function syntax
colors.forEach((color, index) => {
  const capitalizedColor = color.toUpperCase();
  console.log(`Color at index ${index}: ${capitalizedColor}`);
});
