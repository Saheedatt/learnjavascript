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


function joinStrings(string1, string2){
  return `${string1} ${string2}`
}
let strings = concatenateStrings("I am a", "real lover");
console.log(strings)
10; // Write a function called celsiusToFahrenheit that takes a temperature in Celsius as a parameter and returns the equivalent temperature in Fahrenheit. Use the formula:  F= 9/5C + 32

11; //Write a function called isPositive that takes a number as a parameter and returns true if the number is positive and false if it's zero or negative.

12; //Write a function called calculate that takes two numbers and an operator as parameters. The function should perform the specified arithmetic operation (addition, subtraction, multiplication, or division) and return the result.

13; //Write a function called isValidPassword that takes a password as a parameter. The function should return true if the password is at least 8 characters long and contains both uppercase and lowercase letters, and false otherwise.

14; //Write a function called isNumberBetween that takes three parameters: a number, a lower limit, and an upper limit. The function should return true if the number is between the lower and upper limits (inclusive) and false otherwise.
