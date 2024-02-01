1; //Write a ternary operator to check if a given number is even or odd and log the result to the console.
let num = 17;
num % 2 === 0 ? "even" : "odd";
console.log(`The number ${num} is ${num % 2 === 0 ? "even" : "odd"}`);
//  OR
let givenNumber = 20;
const result = givenNumber % 2 === 0 ? "even" : "odd";
console.log(`The number ${givenNumber} is ${result}`);

2; //Given a student's score, use a ternary operator to assign a grade. For example, if the score is greater than or equal to 90, assign 'A', else 'B'.
let score = "39";
const grade =
  score >= 90
    ? "A"
    : score >= 70 && score < 90
    ? "B"
    : score >= 60 && score < 70
    ? "C"
    : score >= 50 && score < 60
    ? "D"
    : score < 50
    ? "F"
    : "Invalid score";

console.log(`The student scored ${score} and their grade is ${grade}`);

const studentScore = 25;

let grade1;
switch (
  true //true becuase we are doing comparisons
) {
  case studentScore >= 80:
    grade == "A";
    break;
  case studentScore >= 70 && studentScore < 80:
    grade == "B";
    break;
  case studentScore >= 50 && studentScore < 70:
    grade == "C";
    break;
  case studentScore >= 40 && studentScore < 50:
    grade == "D";
    break;
  case studentScore >= 0 && studentScore < 40:
    grade == "F";
    break;
  default:
    grade == "You didn't write the exams?";
}
console.log(`The student's grade is ${grade}`);
//I am still trying to figure out why == worked in this switch statement for this case instead of =

let studentMark = 60;
if (studentMark >= 80) {
  //for your question from Friday night @Korede, we cannot write if statment like this "if studentMark. The bracket is necessary"
  console.log(" You got an A");
} else if (studentMark >= 70 && studentMark < 80) {
  console.log("You got a B");
} else if (studentMark >= 60 && studentMark < 70) {
  console.log("You got a C");
} else {
  console.log("You got an F");
}
3; //Write an if-else statement to check if the temperature is above 36 degrees Celsius. If it is, log "You might need to see a doctor" to the console; otherwise, log "You are okay."
let temperature = 20;
if (temperature > 36) {
  console.log("You might need to see a doctor");
} else if (temperature >= 34 && temperature <= 36) {
  console.log("Your temperature is normal");
} else {
  console.log("You might be hypothermic. See a doctor!!!");
}

let bodyTemp = 40;
const advice =
  bodyTemp > 36
    ? "You should see a doctor"
    : bodyTemp >= 34 && bodyTemp < 36
    ? "You are alright"
    : "You should see a doctor immediately";
console.log(advice);
4; //Create a switch statement to log a message based on the day of the week. For example, if the day is Monday, log "It's the start of the week."
let day = "Saturday";
let tell;
switch (day) {
  case (day = "Monday"):
    tell = "It's the start of the week";
    break;
  case (day = "Tuesday"):
  case (day = "Wednesday"):
  case (day = "Thursday"):
  case (day = "Friday"):
    tell = "It's a weekday";
    break;
  case (day = "Saturday"):
  case (day = "Sunday"):
    tell = "It's the weekend!!!";
    break;
  default:
    tell = "It's an invalid day";
}
console.log(tell);
5; //Given a person's age, use a combination of if-else and switch statements to categorize them into groups like "Child," "Teenager," "Adult," or "Senior."
let personAge = 7;
if (personAge > 60) {
  console.log("Senior");
} else if (personAge > 18 && personAge < 60) {
  console.log("Adult");
} else if (personAge <= 18 && personAge > 12) {
  console.log("Teenager");
} else {
  console.log("Child");
}
6; //Write a function called greet that takes a name as a parameter and prints a greeting message. For example, calling greet("John") should print "Hello, John!"
function greet(name) {
  console.log(`Hello ${name}!`);
}
greet("John");
7; //Write a function called calculateArea that takes the radius of a circle as a parameter and returns the area of the circle. Use the formula:
// area = area=π×radius squared
pi = 3.142;
// radius = 10
function calculateArea(radius) {
  let easy = pi * radius ** 2;
  console.log(easy);
  // console.log(`Your area is ${easy}`);
  console.log("The area is " + easy);
  // console.log(`The multiplication value is  ${2*8}` )
  // console.log(`The value now is ${5*6+7}`)

  return easy;
}
calculateArea(7);

function calculateArea2(radius) {
  let area2 = Math.PI * radius ** 2;
  return area2;
}
let results = calculateArea2(3);
console.log(results);

console.log(calculateArea(2));

8; //Write a function called isEven that takes a number as a parameter and returns true if the number is even and false if it's odd.
function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(9));
console.log(isEven(10));

9; //Write a function called concatenateStrings that takes two strings as parameters and returns the concatenated string.

function concatenateStrings(string1, string2) {
  return string1 + " " + string2;
}

let stringed = concatenateStrings("Hello", "world");
console.log(stringed);

function joinStrings(string1, string2) {
  return `${string1} ${string2}`;
}
let strings = concatenateStrings("I am a", "real lover");
console.log(strings);
10; // Write a function called celsiusToFahrenheit that takes a temperature in Celsius as a parameter and returns the equivalent temperature in Fahrenheit. Use the formula:  F= 9/5C + 32
let degreeCelsius = 27;

function celsiusToFahrenheit(degreeCelsius) {
  let degreeFarenheit = (9 / 5) * degreeCelsius + 32;
  return degreeFarenheit;
}
let degreeFarenheit = celsiusToFahrenheit(degreeCelsius);
console.log(`The temperature today is ${degreeFarenheit}F`);
console.log(`The temperature today is ${celsiusToFahrenheit(degreeCelsius)}F`);

let degreeCelsius2;
function celsiusToFahrenheit(degreeCelsius2) {
  let degreeFarenheit = (9 / 5) * degreeCelsius2 + 32;
  return degreeFarenheit;
}
let degreeFarenheit2 = celsiusToFahrenheit(30);
console.log(`The temperature today is ${degreeFarenheit2}F`);

11; //Write a function called isPositive that takes a number as a parameter and returns true if the number is positive and false if it's zero or negative.
let num2;
function isPositive(num2) {
  return num2 > 0;
}
console.log(isPositive(0));

12; //Write a function called calculate that takes two numbers and an operator as parameters. The function should perform the specified arithmetic operation (addition, subtraction, multiplication, or division) and return the result.
function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    //break; because return immediately exits the function, a break statement is not necessary
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) {
        return "Cannot divide by zero";
      }
      return a / b;
    default:
      return "Invalid operator";
  }
}
let operationValue = calculate(5, 0, "*");
console.log(operationValue);

13; //Write a function called isValidPassword that takes a password as a parameter. The function should return true if the password is at least 8 characters long and contains both uppercase and lowercase letters, and false otherwise.
function isValidPassword(password) {
  return (
    password.length >= 8 &&
    password.toUpperCase() !== password &&
    password.toLowerCase() !== password
  );
}
console.log(isValidPassword("HelloWorld"));
console.log(isValidPassword("hellworld"));
14; //Write a function called isNumberBetween that takes three parameters: a number, a lower limit, and an upper limit. The function should return true if the number is between the lower and upper limits (inclusive) and false otherwise.

15; //Use a loop to print numbers from 1 to 20.
let num3 = 1;
while (num3 <= 20) {
  console.log(num3);
  num3++;
}

for (let num4 = 1; num4 <= 20; num4++) {
  console.log(num4);
}
16; //Use a loop to print all even numbers from 1 to 20.
for (let num4 = 1; num4 <= 20; num4++) {
  if (num4 % 2 === 0) {
    console.log(num4);
  }
}
17; //Write a program that prints the numbers from 1 to 50. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".
for (let x = 1; x <= 50; x++) {
  if (x % 3 === 0 && x % 5 === 0) {
    console.log("FizzBuzz");
  } else if (x % 3 === 0) {
    console.log("Fizz");
  } else if (x % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(x);
  }
}
/*In the above code, the order of the conditions was necessary to check. 
if (x % 3 === 0 && x % 5 === 0)  ensures that the code runs and checks for values that are both multiples of 3 and multiples of 5 before checking for those that are multiples of 3 and then those that are multiples of 5;

for(let x = 1; x <=50; x++){
    if(x % 3 === 0){
        console.log("Fizz");
    }else if(x % 5 === 0){
        console.log("Buzz")
    }else if(x % 3 ===0 && x % 5 ===0){
    console.log("FizzBuzz")
    }else{
        console.log(x)
    }
}
The above code has a logical error because the code first checks for multiples of 3 and then checks for multiples of 5. This would have satisfied all the conditions and it wont end up checking for numbers that are both multiples of 5 and multiples of 3 becuase they would already have been worked on and given Fizz or buzz.

multiples of 3 simply means that when you divide by 3, you get 0 as a remainder
multiples of 5 simply means that when you divide by 5, you get 0 as a remainder

so our code is checking the condtions like this:
a. x = 1: our starter, x<=0: we want our code to loop from one to 50, x++: increment by 1 as you go
b. if x divided by 3 remains 0 and x  divided by 5 remains 0(remember our logical operators), print "FizzBuzz"
c. now, with the remaining number between 1 and 50, if x is divisible by 3 to remian 0, print Fizz
d. and with the rest of the numbers, if x is divisible by 5 to remain 0, print Buzz
e. console.log(x) simply means it should now print the remaining numbers that didnt satisfy any of our given conditions.
*/

18; //Write a function that takes a number as an argument and returns the sum of the squares of all numbers from 1 to that number.
// let digit = 8;
function squared(digit) {
  let sum = 0; //initialization

  for (let i = 1; i <= digit; i++) {
    sum += i ** 2;
  }
  return sum;
}
console.log(squared(5));

//initialization of the sum stores the cumulative sum.
//It them uses a for loo[ to iterate through the numberes from 1 to given digit , calculating the squareof each number and adding it to the `sum`. Finally, the function returns the computed sum

19; //Write a function that takes a number as input and returns the sum of its digits using a loop.
function givenDigit(digits) {
  let sum2 = 0;
  //initialization

  //convert the number to a string to iterate through its digits
  const number = digits.toString();
  for (let i = 0; i < number.length; i++) {
    //convert each digit back to a number and add it to the sum
    sum2 += parseInt(number[i]);
  }
  return sum2;
}
console.log(givenDigit(2356));

//We are converting the number to a string is done to facilitate the iteration through its digits. When you convert the number to a string, it becomes an iterable sequence of characters, and you can easily access each digit using array-like indexing.
//When the number is a string, you can use array indexing (number[i]) to access individual digits
// This makes it easy to convert each digit back to a number using parseInt() and add it to the sum.

20; //Create an object called person with properties for name, age, and city, best food, colour.
let person = {
  name: "Saheedat",
  age: 20,
  city: "Lagos",
  "best food": "Rice",
  colour: "gray",
};

21; //Given the person object from the previous exercise, write code to access and print each property.
console.log(person);

for (let key in person) {
  console.log(key);
}

22; //Change the age property of the person object to a new value and print the updated object.
person.age = 24;
console.log(person);

23; //Create an object called calculator with properties num1 and num2. Add a method named add that returns the sum of the two numbers.

24; // Create an object with at least three properties. Use a for...in loop to iterate over the object and print each property and its value.

25; //Create two objects with the same structure but different values. Write a function that compares the two objects and returns whether they are equal.

26; // Create an array of objects, each representing a book with properties like title, author, and year. Loop through the array and print information about each book.

27; //Create an object with nested properties. For example, an object representing a car with properties like make, model, and engine, where engine itself is an object with properties like type and horsepower.

28; //Extend the calculator object from Exercise 4 by adding methods subtract and multiply that use the this keyword to perform the corresponding operations.

//Leave this one for now.
29; //Define a constructor function for creating Person objects with properties for name and age. Create multiple instances of the Person object using the constructor.
